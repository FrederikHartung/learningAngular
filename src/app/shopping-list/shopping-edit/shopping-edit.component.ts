import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();
  @Output() ingredientDeletedEvent = new EventEmitter<void>();
  @Output() clearListEvent = new EventEmitter<void>();
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') amountInput;

  onAddItem(name: string, amount: number) {
    console.log('added ingredience: name: ' + name + ', amount: ' + amount);
    this.ingredientAddedEvent.emit(new Ingredient(name, amount));
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

  onDeleteItem() {
    console.log('Delete Item');
    this.ingredientDeletedEvent.emit();
  }

  onClearList() {
    console.log('Clear ingredience List');
    this.clearListEvent.emit();
  }
}
