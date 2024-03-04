import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css'
})
export class RecipeBookComponent {
  recipeDetail: Recipe;

  onRecipeChanged(recipe: Recipe) {
    console.log('Recipe Changed to: ' + recipe.name);
    this.recipeDetail = recipe;
  }
}
