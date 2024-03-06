import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { LoggingService } from "../shared/logging.service";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    providers: [LoggingService]
})
export class ShoppingListComponent implements OnInit{
    selectedIngredientIndex: number | null = null;
    ingredients: Ingredient[]

    constructor(private loggingService: LoggingService, private shoppingListService: ShoppingListService){}

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
    }

    onIngredienceAdded(ingredient: Ingredient) {
        this.shoppingListService.addIngredient(ingredient);
        this.loggingService.logIngredienceAdded(ingredient.name, ingredient.amount);
    }

    onIngredienceDeleted() {
        if (this.selectedIngredientIndex === null) {
            return;
        }

       this.shoppingListService.removeIngredient(this.selectedIngredientIndex);
    }

    onClearList() {
        this.ingredients = [];
    }

    onIngredientClick(index: number) {
        console.log('Clicked ingredient index:', index);
        this.selectedIngredientIndex = index;
    }
}