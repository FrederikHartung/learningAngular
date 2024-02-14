import { Component } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  recipe: Recipe;

  constructor(recipe: Recipe){
    this.recipe = recipe;
  }

  getRecipe(){
    return this.recipe;
  }
}
