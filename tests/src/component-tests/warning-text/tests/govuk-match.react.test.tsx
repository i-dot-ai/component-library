import { describe, it, expect } from "vitest";
import { WarningText } from "@i-dot-ai-npm/component-library-react";
import { renderReact } from "../../../render/react.js";
import { casesFor, toShape } from "../../../matches-govuk-helpers/cases.js";
import { warningTextMapping } from "../match-govuk-mappings.js";

describe("WarningText — React matches govuk fixture shape", () => {
    for (const testCase of casesFor("warning-text", warningTextMapping, { skipHtmlContent: true })) {
        it(testCase.name, () => {
            const html = renderReact(WarningText, testCase.input.props, testCase.input.text);
            expect(toShape(html)).toEqual(testCase.expected);
        });
    }
});
