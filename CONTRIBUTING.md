# Contributing

This document describes how to add a component to the cross-framework test
suite in `tests/`.

## What the tests check

Every component is implemented four times — React, Solid, Svelte and Astro
(`packages/{react,solid,svelte,astro}`). The test suite renders each
implementation to HTML and asserts it matches **govuk-frontend's own output**
for the same inputs.

The oracle is govuk-frontend's shipped `fixtures.json` (`tests/src/oracle.ts`),
so the suite answers exactly one question: **does our output match
govuk-frontend?** It does not test:

- i.AI-only components (no govuk fixture exists — see "Out of scope" below)
- i.AI-only props on govuk components (e.g. `tertiary`, `small` on Button)
- behaviour / interactivity (JS-driven state — a separate layer, not yet built)

## How comparison works

Rendered HTML and the govuk fixture HTML are both reduced to a normalised
"shape" (`tests/src/reduce.ts`): tag, sorted class list, attribute map, text and
children. Framework noise (hydration markers, attribute order, etc.) is stripped
by `tests/src/normalise.ts`. Two outputs that reduce to the same shape are
considered equal, so byte-level differences between frameworks don't matter —
only semantic structure does.

## Layout

```
tests/src/
  oracle.ts            loads govuk fixtures.json (skips hidden + visual-state)
  reduce.ts            HTML string -> normalised shape
  normalise.ts         strips framework noise from a shape
  mapping.ts           ComponentMapping type + mapOptions (govuk options -> props)
  cases.ts             casesFor(component, mapping) + toShape
  render/              per-framework render adapters
  env.d.ts             ambient *.svelte / *.astro module declarations

  <component>/
    mapping.ts         per-component: how govuk options map to our inputs
    tests/
      govuk-match.react.test.tsx
      govuk-match.solid.test.tsx
      govuk-match.svelte.test.ts
      govuk-match.astro.test.ts
```

Test files are discovered by the `*.<framework>.test.*` suffix
(`tests/vitest.config.ts`, `tests/vitest.astro.config.ts`). The prefix
(`govuk-match`) signals intent; the component comes from the folder path.

Run everything with `make run_unit_tests` (or `pnpm test` inside `tests/`).

## Two kinds of component

### Tier 1 — single-element components (e.g. Button)

The govuk fixture's `options` map directly to props, and one fixture renders as
one component. These are fully driven by the fixtures — no hand-authored markup.

Add:

1. `tests/src/<component>/mapping.ts` — a `ComponentMapping` describing only
   where our prop API diverges from govuk's macro options. `mapOptions`
   (`tests/src/mapping.ts`) already handles the common cases by default
   (`text`/`html` -> children, `attributes` -> props, and passthrough of
   `id`/`name`/`type`/`value`/`href`), so most components only need a
   `classesToProps` and/or a small `transform`.

   Only map classes/options that appear in **govuk** fixtures. Do not map
   i.AI-only variants (they are never in the oracle, so the mapping would be
   dead code — see `tests/src/button/mapping.ts`).

2. Four thin test files under `tests/src/<component>/tests/`, one per framework,
   each following this shape:

   ```ts
   import { describe, it, expect } from "vitest";
   import { Button } from "@i-dot-ai-npm/component-library-react";
   import { renderReact } from "../../../matches-govuk-helpers/render/react.js";
   import { casesFor, toShape } from "../../cases.js";
   import { buttonMapping } from "../mapping.js";

   describe("Button — React matches govuk fixture shape", () => {
       for (const testCase of casesFor("button", buttonMapping)) {
           it(testCase.name, () => {
               const html = renderReact(Button, testCase.input.props, testCase.input.text);
               expect(toShape(html)).toEqual(testCase.expected);
           });
       }
   });
   ```

### Tier 2 — composite components (e.g. Accordion)

The govuk fixture describes a tree (e.g. an `items` array), which our library
splits into multiple sub-components. One fixture no longer maps to a single
render, and the section content is stored by govuk as opaque HTML strings.

Add:

1. `tests/src/<component>/mapping.ts` — a function that reads the fixtures and
   returns structured data: the ids, headings, flags and content for each part,
   plus the raw `expectedHtml`. See `tests/src/accordion/mapping.ts`
   (`accordionFixtures()`).

2. Per-framework rendering, which differs by capability:

   - **Svelte / Astro** can inject raw HTML (`{@html}` / `<Fragment set:html>`),
     so a single `examples/FixtureAccordion.{svelte,astro}` renders any fixture
     directly from the data — no hand-authored content.

   - **React / Solid** cannot inject a raw HTML string as unwrapped content, so
     the opaque section content is re-authored as real elements in
     `content/govuk-matched-content.{react,solid}.tsx`, and an
     `examples/accordion.{react,solid}.tsx` renderer combines the scaffold
     (from `mapping.ts`) with that content. The React and Solid content files
     are near-identical (only `className` vs `class` and imports differ); this
     duplication is accepted for readability.

3. Four test files under `tests/src/<component>/tests/` that render each
   framework's output and compare to `fixture.expectedHtml` via
   `normalise(reduce(...))`. See `tests/src/accordion/tests/`.

## Deciding which tier

- One element, no children structure beyond text/simple content → **Tier 1**.
- Multiple sub-components / an `items`-style tree in the fixture → **Tier 2**.

## Out of scope (for now)

- **i.AI-only components** (no govuk equivalent) and **i.AI-only props** on govuk
  components have no govuk oracle. They would need an authored-fixtures loader
  that produces the same `{ name, options, html }` shape as `oracle.ts`. Not yet
  built.
- **Behaviour** (accordion collapse, character-count updates, etc.) is not tested
  — these are shape tests only. A behavioural (Playwright) layer is a separate,
  future addition; it would sit alongside as `behaviour.<framework>.test.*`.
