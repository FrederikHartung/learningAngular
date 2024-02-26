import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  onAddItem() {
    console.log('Add Item');
  }
  onDeleteItem() {
    console.log('Delete Item');
  }
  onClearList() {
    console.log('Clear List');
  }
}
