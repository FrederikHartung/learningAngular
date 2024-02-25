import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  onClickShoppingList() {
    console.log('Shopping List Clicked');
    this.featureSelected.emit('shopping');
  }
  onClickRecipes() {
    console.log('Recipes Clicked');
    this.featureSelected.emit('recipe');
  }

}
