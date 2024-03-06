import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    getIngredients(): Ingredient[] {
        return this.ingredients;
    }

    removeIngredient(index: number) {
        this.ingredients.splice(index, 1);
    }
}