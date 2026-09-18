import { describe, it } from "vitest";
import { Button } from "@i-dot-ai-npm/component-library-solid";
import { renderSolid } from "../../../render/solid";
import { expectVariantClass } from "../../../iai-variants-helpers/variants";
import { iaiButtonVariants } from "../iai-variants";

describe("i.AI variants - Button", () => {
    for (const variant of iaiButtonVariants) {
        it(variant.name, () => {
            const html = renderSolid(Button, variant.props);
            expectVariantClass(html, variant);
        });
    }
});
