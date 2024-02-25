import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
    new Recipe(
      'Omas Pfannkuchen',
      'Dies ist ein Rezept für Omas Pfannkuchen',
      'https://live.staticflickr.com/65535/50857524133_1be9c4d5e8_h.jpg'
    ),
    new Recipe(
      'Erikas Spaghetti ala Carbonara',
      'Dies ist ein Rezept für Erikas Spaghetti ala Carbonara',
      'https://ais.kochbar.de/kbrezept/560980_1177117/1200x1200/spaghetti-napoli-rezept-bild-nr-2.jpg'
    ),
    new Recipe(
      'Kartoffelsalat nach Müllerin Art',
      'Dies ist ein Rezept für Kartoffelsalat nach Müllerin Art',
      'https://img.chefkoch-cdn.de/rezepte/189081080567822/bilder/807103/crop-360x240/kartoffelsalat-nach-mutters-art-mit-fleischsalat.jpg'
    ),
    new Recipe(
      'Saskias Guoza',
      'Dieses Gericht sorgt bei jeden geselligen Abend für strahlende Gesichter.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Japanese_pan_fried_gyoza.jpg/1599px-Japanese_pan_fried_gyoza.jpg?20170712141633'
    )
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
