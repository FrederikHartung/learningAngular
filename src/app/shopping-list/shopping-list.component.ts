import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    constructor() {
        console.log('ShoppingListComponent constructor called');
    }

    ngOnInit() {
        console.log('ShoppingListComponent ngOnInit called');
    }

    ngOnDestroy() {
        console.log('ShoppingListComponent ngOnDestroy called');
    }

    ngOnChanges() {
        console.log('ShoppingListComponent ngOnChanges called');
    }

    ngDoCheck() {
        console.log('ShoppingListComponent ngDoCheck called');
    }

    ngAfterContentInit() {
        console.log('ShoppingListComponent ngAfterContentInit called');
    }

    ngAfterContentChecked() {
        console.log('ShoppingListComponent ngAfterContentChecked called');
    }

    ngAfterViewInit() {
        console.log('ShoppingListComponent ngAfterViewInit called');
    }

    ngAfterViewChecked() {
        console.log('ShoppingListComponent ngAfterViewChecked called');
    }

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