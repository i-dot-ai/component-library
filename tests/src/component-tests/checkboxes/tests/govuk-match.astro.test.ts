import { describe, it, expect } from "vitest";
import { renderAstro } from "../../../render/astro.js";
import { reduce } from "../../../matches-govuk-helpers/reduce.js";
import { normalise } from "../../../matches-govuk-helpers/normalise.js";
import { checkboxesFixtures } from "../match-govuk-mappings.js";
import CheckboxesField from "../examples/CheckboxesField.astro";

describe("Checkboxes — Astro matches govuk fixture shape", () => {
    for (const data of checkboxesFixtures()) {
        it(data.name, async () => {
            const html = await renderAstro(CheckboxesField as never, { data });
            expect(normalise(reduce(html))).toEqual(normalise(reduce(data.expectedHtml)));
        });
    }
});
