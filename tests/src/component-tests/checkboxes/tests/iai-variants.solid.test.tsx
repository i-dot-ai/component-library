import { describe, it } from "vitest";
import { Checkboxes } from "@i-dot-ai-npm/component-library-solid";
import { renderSolid } from "../../../render/solid";
import { expectVariantClass } from "../../../iai-variants-helpers/variants";
import { iaiCheckboxesVariants } from "../iai-variants";

describe("i.AI variants - Checkboxes", () => {
    for (const variant of iaiCheckboxesVariants) {
        it(variant.name, () => {
            const html = renderSolid(Checkboxes, variant.props);
            expectVariantClass(html, variant);
        });
    }
});
