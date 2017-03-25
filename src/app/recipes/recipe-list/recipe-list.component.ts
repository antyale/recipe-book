import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {

  }

  ngOnInit() {
    this.recipes.push(
      new Recipe('Fabada', 'Fabada', 'https://upload.wikimedia.org/wikipedia/commons/7/77/Fabada_en_cazuela_de_barro.jpg'));
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }

}
