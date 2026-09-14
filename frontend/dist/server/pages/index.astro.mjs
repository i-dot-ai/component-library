import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9vvDxKFD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B9if3jym.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-3"> <div class="border-b-1 border-pink flex gap-4 items-center pb-3"> <img class="w-9" src="/favicon.svg" alt="Incubator for AI"> <h1 class="font-bold text-3xl">Starter App</h1> </div> <p class="mt-5">This is working! Edit <code class="text-pink">frontend/src/index.astro</code> to make changes to this page.</p> </div> ` })}`;
}, "/Users/VickersJ/projects/component-library/frontend/src/pages/index.astro", void 0);

const $$file = "/Users/VickersJ/projects/component-library/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
