import { expect, test } from '@testronaut/angular';
import { RecipeFilter } from './recipe-filter';

test.describe('RecipeFilter', () => {
  test('triggers filterChange', async ({ page, mount }) => {
    const { outputs } = await mount(RecipeFilter);

    await page.getByLabel('Keywords').fill('Burger');

    await expect.poll(() => outputs.filterChange.calls).toMatchObject([{ keywords: 'Burger' }]);
  });
});
