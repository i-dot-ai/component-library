import { describe, it } from "vitest";
import { Input } from "@i-dot-ai-npm/component-library-astro";
import { renderAstro } from "../../../render/astro";
import { expectVariantClass } from "../../../iai-variants-helpers/variants";
import { iaiInputVariants } from "../iai-variants";

describe("i.AI variants - Input", () => {
    for (const variant of iaiInputVariants) {
        it(variant.name, async () => {
            const html = await renderAstro(Input, variant.props);
            expectVariantClass(html, variant);
        });
    }
});
