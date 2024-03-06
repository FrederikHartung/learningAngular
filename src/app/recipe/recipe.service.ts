import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelectedEvent = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [new Recipe(
        'Omas Pfannkuchen',
        'Dies ist ein Rezept für Omas Pfannkuchen',
        'https://live.staticflickr.com/65535/50857524133_1be9c4d5e8_h.jpg',
        [new Ingredient('Mehl', 250), new Ingredient('Milch', 500), new Ingredient('Eier', 4)]
      ),
      new Recipe(
        'Erikas Spaghetti ala Carbonara',
        'Dies ist ein Rezept für Erikas Spaghetti ala Carbonara',
        'https://ais.kochbar.de/kbrezept/560980_1177117/1200x1200/spaghetti-napoli-rezept-bild-nr-2.jpg',
        [new Ingredient('Spaghetti', 500), new Ingredient('Eier', 4), new Ingredient('Speck', 200)]
      ),
      new Recipe(
        'Kartoffelsalat nach Müllerin Art',
        'Dies ist ein Rezept für Kartoffelsalat nach Müllerin Art',
        'https://img.chefkoch-cdn.de/rezepte/189081080567822/bilder/807103/crop-360x240/kartoffelsalat-nach-mutters-art-mit-fleischsalat.jpg',
        [new Ingredient('Kartoffeln', 1000), new Ingredient('Zwiebeln', 2), new Ingredient('Gurken', 2)]
      ),
      new Recipe(
        'Saskias Guoza',
        'Dieses Gericht sorgt bei jeden geselligen Abend für strahlende Gesichter.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Japanese_pan_fried_gyoza.jpg/1599px-Japanese_pan_fried_gyoza.jpg?20170712141633',
        [new Ingredient('Schweinehackfleisch', 500), new Ingredient('Lauch', 2), new Ingredient('Gyoza-Teig', 1)]
      )]; 
    
    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeSelectedEvent.emit(recipe);
    }
}