import { TestBed } from '@angular/core/testing';
import { expect, test } from '@testronaut/angular';
import { provideRecipeRepositoryFake, RecipeRepositoryFake } from './recipe-repository.fake';
import { RecipeSearch } from './recipe-search';
import { recipeMother } from './recipe.mother';

test.describe('RecipeSearch', () => {
  test.skip('filters recipes', async ({ page, mount, runInBrowser }) => {
    throw new Error('🚧 Work in progress!');
  });
});
