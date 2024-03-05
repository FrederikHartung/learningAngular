import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css'
})
export class RecipeBookComponent {
  recipeDetail: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeSelectedEvent.subscribe(
      (recipe: Recipe) => {
        this.onRecipeChanged(recipe)
      }
    );
  }

  onRecipeChanged(recipe: Recipe) {
    console.log('Recipe Changed to: ' + recipe.name);
    this.recipeDetail = recipe;
  }
}
