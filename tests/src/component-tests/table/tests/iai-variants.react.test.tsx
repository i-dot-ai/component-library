import { describe, it } from "vitest";
import { Table } from "@i-dot-ai-npm/component-library-react";
import { renderReact } from "../../../render/react";
import { expectVariantClass } from "../../../iai-variants-helpers/variants";
import { iaiTableVariants } from "../iai-variants";

describe("i.AI variants - Table", () => {
    for (const variant of iaiTableVariants) {
        it(variant.name, () => {
            const html = renderReact(Table, variant.props);
            expectVariantClass(html, variant);
        });
    }
});
