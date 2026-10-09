-include .env
export


install:
	pnpm install

pre-commit-install:
	pre-commit install

run_frontend:
	pnpm --filter component-library-gallery dev

run_unit_tests:
	pnpm --filter @i-dot-ai-npm/component-library-tests-unit test

install_e2e_browsers:
	pnpm --filter @i-dot-ai-npm/component-library-tests-e2e exec playwright install

run_e2e_tests:
	pnpm --filter @i-dot-ai-npm/component-library-tests-e2e test

run_e2e_a11y_tests:
	pnpm --filter @i-dot-ai-npm/component-library-tests-e2e exec playwright test modal.a11y

run_e2e_behaviour_tests:
	pnpm --filter @i-dot-ai-npm/component-library-tests-e2e exec playwright test modal.behaviour

run_all_tests: run_unit_tests run_e2e_tests
