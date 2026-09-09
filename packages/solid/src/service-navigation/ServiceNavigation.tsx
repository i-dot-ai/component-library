// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ServiceNavigationProps = {
    sideNav?: boolean;
    inverse?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ServiceNavigation(props: ServiceNavigationProps) {
    const [local, rest] = splitProps(props, ["sideNav", "inverse", "class", "children"]);
    const classes = () =>
        [
            "govuk-service-navigation",
            local.sideNav ? "govuk-service-navigation--side-nav" : "",
            local.inverse ? "govuk-service-navigation--inverse" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <div class={classes()} data-module="govuk-service-navigation" {...rest}>
            <div class="govuk-width-container">
                <div class="govuk-service-navigation__container">
                    <nav class="govuk-service-navigation__wrapper" aria-label="Menu">
                        <ul class="govuk-service-navigation__list" id="navigation">
                            {local.children ?? ""}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
