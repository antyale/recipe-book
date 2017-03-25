import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Fabada', 'Fabada', 'https://upload.wikimedia.org/wikipedia/commons/7/77/Fabada_en_cazuela_de_barro.jpg');

  constructor() {

  }

  ngOnInit() {

  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
