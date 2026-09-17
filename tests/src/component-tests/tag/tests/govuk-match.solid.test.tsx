import { describe, it, expect } from "vitest";
import { Tag } from "@i-dot-ai-npm/component-library-solid";
import { renderSolid } from "../../../render/solid.js";
import { casesFor, toShape } from "../../../matches-govuk-helpers/cases.js";
import { tagMapping } from "../match-govuk-mappings.js";

describe("Tag — Solid matches govuk fixture shape", () => {
    for (const testCase of casesFor("tag", tagMapping)) {
        it(testCase.name, () => {
            const html = renderSolid(Tag, testCase.input.props, testCase.input.text);
            expect(toShape(html)).toEqual(testCase.expected);
        });
    }
});
