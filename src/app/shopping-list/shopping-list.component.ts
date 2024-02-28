import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent{
    onlyOdd: boolean = false;
    selectedIngredientIndex: number | null = null;

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    onIngredienceAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    onIngredienceDeleted() {
        if (this.selectedIngredientIndex === null) {
            return;
        }

       this.ingredients.splice(this.selectedIngredientIndex, 1);
    }

    onClearList() {
        this.ingredients = [];
    }

    onIngredientClick(index: number) {
        console.log('Clicked ingredient index:', index);
        this.selectedIngredientIndex = index;
        this.onlyOdd = !this.onlyOdd;
    }
}