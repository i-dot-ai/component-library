-include .env
export


install:
	pnpm install

pre-commit-install:
	pre-commit install

run_frontend:
	pnpm --filter component-library-gallery dev

run_unit_tests:
	pnpm --filter @i-dot-ai-npm/component-library-tests test
