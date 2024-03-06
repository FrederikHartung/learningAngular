import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingrediences: Ingredient[];

    constructor(name: string, description: string, imagePath: string, ingrediences: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingrediences = ingrediences;
    }

    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getImagePath() {
        return this.imagePath;
    }
    getIngrediences() {
        return this.ingrediences;
    }
}