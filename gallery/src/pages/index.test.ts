import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import IndexPage from './index.astro';

test('Card with slots', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(IndexPage);

  expect(result).toMatchSnapshot();
});