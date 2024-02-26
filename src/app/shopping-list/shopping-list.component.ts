import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent{
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    //all ng... methods are lifecycle hooks
    //ngOnInit is called after the constructor
    //ngOnDestroy is called when the component is destroyed
    //ngOnChanges is called when the component is changed
    //ngDoCheck is called when the component is checked
    //ngAfterContentInit is called after the content is initialized
    //ngAfterContentChecked is called after the content is checked
    //ngAfterViewInit is called after the view is initialized
    //ngAfterViewChecked is called after the view is checked

}