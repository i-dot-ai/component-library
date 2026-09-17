import { describe, it, expect } from "vitest";
import { BackLink } from "@i-dot-ai-npm/component-library-solid";
import { renderSolid } from "../../../render/solid.js";
import { casesFor, toShape } from "../../../matches-govuk-helpers/cases.js";
import { backLinkMapping } from "../match-govuk-mappings.js";

describe("BackLink — Solid matches govuk fixture shape", () => {
    for (const testCase of casesFor("back-link", backLinkMapping)) {
        it(testCase.name, () => {
            const html = renderSolid(BackLink, testCase.input.props, testCase.input.text);
            expect(toShape(html)).toEqual(testCase.expected);
        });
    }
});
