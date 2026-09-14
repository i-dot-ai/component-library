import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9vvDxKFD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B9if3jym.mjs';
export { renderers } from '../renderers.mjs';

const $$GenericError = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-3"> <div class="border-b-1 border-pink flex gap-4 items-center pb-3"> <img class="w-9" src="/favicon.svg" alt="Incubator for AI"> <h1 class="font-bold text-3xl">An Error Occurred</h1> </div> <p class="mt-5">Something went wrong when accessing this page. Please try again later, or contact i.AI support if the issue persists.</p> </div> ` })}`;
}, "/Users/VickersJ/projects/component-library/frontend/src/pages/generic-error.astro", void 0);

const $$file = "/Users/VickersJ/projects/component-library/frontend/src/pages/generic-error.astro";
const $$url = "/generic-error";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GenericError,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
