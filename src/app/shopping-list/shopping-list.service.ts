import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    removeIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    clearIngredients() {
        this.ingredients = [];
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}