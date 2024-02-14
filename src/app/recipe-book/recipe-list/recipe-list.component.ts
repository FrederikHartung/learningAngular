import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test', 'https://www.simplyrecipes.com/wp-content/uploads/2019/03/shakshuka-horiz-a-1600.jpg')];

}
