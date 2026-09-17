import { describe, it, expect } from "vitest";
import { renderSvelte } from "../../../render/svelte.js";
import { reduce } from "../../../matches-govuk-helpers/reduce.js";
import { normalise } from "../../../matches-govuk-helpers/normalise.js";
import { footerFixtures } from "../match-govuk-mappings.js";
import FixtureFooter from "../examples/FixtureFooter.svelte";

describe("Matches govuk fixture shape - Footer", () => {
    for (const fixture of footerFixtures()) {
        it(fixture.name, () => {
            const html = renderSvelte(FixtureFooter as never, {
                navigation: fixture.navigation,
                meta: fixture.meta,
                contentLicence: fixture.contentLicence,
                copyright: fixture.copyright,
            });
            expect(normalise(reduce(html))).toEqual(normalise(reduce(fixture.expectedHtml)));
        });
    }
});
