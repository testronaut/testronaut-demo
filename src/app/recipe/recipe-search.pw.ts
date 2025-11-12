import { TestBed } from '@angular/core/testing';
import { expect, test } from '@testronaut/angular';
import { provideRecipeRepositoryFake, RecipeRepositoryFake } from './recipe-repository.fake';
import { RecipeSearch } from './recipe-search';
import { recipeMother } from './recipe.mother';

test.describe('RecipeSearch', () => {
  test('filters recipes', async ({ page, mount, runInBrowser }) => {
    await runInBrowser('configure', () => {
      TestBed.configureTestingModule({
        providers: [provideRecipeRepositoryFake()],
      });

      TestBed.inject(RecipeRepositoryFake).setRecipes([
        recipeMother.withBasicInfo('Burger').build(),
        recipeMother.withBasicInfo('Salad').build(),
      ]);
    });

    await mount(RecipeSearch);

    await page.getByLabel('Keywords').fill('Bur');

    await expect(page.getByRole('heading', { level: 2 })).toHaveText(['Burger']);
  });
});
