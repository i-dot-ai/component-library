// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type PhaseBannerProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function PhaseBanner(props: PhaseBannerProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-phase-banner", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            <p class="govuk-phase-banner__content">
                {local.children ?? ""}
            </p>
        </div>
    );
}
