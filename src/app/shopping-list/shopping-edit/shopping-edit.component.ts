import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() ingredientDeletedEvent = new EventEmitter<void>();
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') amountInput;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem(name: string, amount: number) {
    if(!name || !amount || amount <= 0) {
      console.log('Invalid input');
      return;
    }

    this.shoppingListService.addIngredient(new Ingredient(name, amount));
    console.log('Added ingredient:', name, amount);
  }

  onDeleteItem() {
    this.ingredientDeletedEvent.emit();
  }

  onClearList() {
    this.shoppingListService.clearIngredients();
  }
}
