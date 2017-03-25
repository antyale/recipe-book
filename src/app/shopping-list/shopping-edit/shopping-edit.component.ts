import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdd = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdd() {
    this.ingredientAdd.emit(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value)
    );
  }

}
