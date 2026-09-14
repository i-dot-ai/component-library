-include .env
export


install:
	pnpm install

pre-commit-install:
	pre-commit install

run_frontend:
	pnpm --filter component-library-gallery dev 
