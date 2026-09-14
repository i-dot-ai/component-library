// i.AI Design System — behaviour layer.
//
// Progressive enhancement for i.AI components. Call after govuk-frontend's
// initAll(). Each component's enhancement lives in its own module.

import { initToggles } from './scripts/toggle.js';

export { initToggles };

export function initAllIAIDesignSystem() {
  initToggles();
}
