import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  onAddItem(name: string, amount: number) {
    console.log('name: ' + name + ' amount: ' + amount);
    this.ingredientAdded.emit({name, amount: amount});
  }

  onDeleteItem() {
    console.log('Delete Item');
  }
  onClearList() {
    console.log('Clear List');
  }
}
