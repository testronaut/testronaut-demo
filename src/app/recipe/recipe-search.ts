import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Catalog } from '../shared/catalog.ng';
import { RecipeAddButton } from './recipe-add-button';
import { RecipeFilter } from './recipe-filter';
import { RecipeFilterCriteria } from './recipe-filter-criteria';
import { RecipePreview } from './recipe-preview';
import { RecipeRepository } from './recipe-repository';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wm-recipe-search',
  imports: [Catalog, RecipeAddButton, RecipeFilter, RecipePreview],
  template: `
    <wm-recipe-filter (filterChange)="filter.set($event)"></wm-recipe-filter>
    <wm-catalog>
      @if (recipes.hasValue()) {
        @for (recipe of recipes.value(); track recipe.id) {
          <wm-recipe-preview [recipe]="recipe" data-testid="recipe-preview">
            <wm-recipe-add-button [recipe]="recipe" />
          </wm-recipe-preview>
        } @empty {
          <figure class="no-results" role="status" aria-live="polite">
            <img src="https://marmicode.io/assets/error.gif" alt="Sad pot" />
            <figcaption>No recipes found</figcaption>
          </figure>
        }
      }
    </wm-catalog>
  `,
  styles: `
    .no-results {
      font-size: 2rem;
      text-align: center;
    }
  `,
})
export class RecipeSearch {
  filter = signal<RecipeFilterCriteria>({});
  recipes = rxResource({
    params: () => this.filter(),
    stream: ({ params }) => this._recipeRepository.search(params),
  });

  private _recipeRepository = inject(RecipeRepository);
}
