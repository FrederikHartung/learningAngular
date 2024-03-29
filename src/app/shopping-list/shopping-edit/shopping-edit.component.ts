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
      return;
    }

    this.shoppingListService.addIngredient(new Ingredient(name, amount));
    console.log('Added ingredient:', name, amount);
  }

  onDeleteItem() {
    console.log('Deleting ingredient');
    this.ingredientDeletedEvent.emit();
  }

  onClearList() {
    console.log('Clearing list');
    this.shoppingListService.clearIngredients();
  }
}
