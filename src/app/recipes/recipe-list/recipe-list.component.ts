import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.quo.es/var/quo/storage/images/naturaleza/' +
    'el-tomate-es-una-fruta-una-hortaliza-una-verdura/924689-1-esl-ES/el-tomate-es-una-fruta-una-hortaliza-una-verdura_ampliacion.jpg');

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
