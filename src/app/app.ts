import { Component } from '@angular/core';
import { RecipeSearch } from './recipe/recipe-search';

@Component({
  selector: 'app-root',
  imports: [RecipeSearch],
  template: `<wm-recipe-search />`,
})
export class App {}
