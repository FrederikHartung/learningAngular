import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { LoggingService } from "../shared/logging.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    providers: [LoggingService]
})
export class ShoppingListComponent{
    selectedIngredientIndex: number | null = null;
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    constructor(private loggingService: LoggingService){}

    onIngredienceAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.loggingService.logIngredienceAdded(ingredient.name, ingredient.amount);
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
    }
}