import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe(
      'Test Title',
      'Test Description',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
    new Recipe(
      'Test Title 2',
      'Test Description 2',
      'https://www.simplyrecipes.com/wp-content/uploads/2019/03/shakshuka-horiz-a-1600.jpg'
    ),
    new Recipe(
      'Test Title 3',
      'Test Description 3',
      'https://www.simplyrecipes.com/wp-content/uploads/2019/03/shakshuka-horiz-a-1600.jpg'
    )
  ];
}
