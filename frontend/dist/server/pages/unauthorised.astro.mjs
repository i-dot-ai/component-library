import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9vvDxKFD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B9if3jym.mjs';
export { renderers } from '../renderers.mjs';

const $$Unauthorised = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-3"> <div class="border-b-1 border-pink flex gap-4 items-center pb-3"> <img class="w-9" src="/favicon.svg" alt="Incubator for AI"> <h1 class="font-bold text-3xl">Unauthorised</h1> </div> <p class="mt-5">You do not have permission to access this page. Please contact i.AI support if you believe this is an error.</p> </div> ` })}`;
}, "/Users/VickersJ/projects/component-library/frontend/src/pages/unauthorised.astro", void 0);

const $$file = "/Users/VickersJ/projects/component-library/frontend/src/pages/unauthorised.astro";
const $$url = "/unauthorised";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Unauthorised,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
