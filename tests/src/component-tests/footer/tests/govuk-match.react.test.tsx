import { describe, it, expect } from "vitest";
import { renderReact } from "../../../render/react.js";
import { reduce } from "../../../matches-govuk-helpers/reduce.js";
import { normalise } from "../../../matches-govuk-helpers/normalise.js";
import { footerFixtures } from "../match-govuk-mappings.js";
import { renderFooter } from "../examples/footer.react.js";

describe("Matches govuk fixture shape - Footer", () => {
    for (const fixture of footerFixtures()) {
        it(fixture.name, () => {
            const html = renderReact(() => renderFooter(fixture), {});
            expect(normalise(reduce(html))).toEqual(normalise(reduce(fixture.expectedHtml)));
        });
    }
});
