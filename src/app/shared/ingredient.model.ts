export class Ingredient {
    name: string;
    amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    getName() {
        return this.name;
    }

    getAmount() {
        return this.amount;
    }
    
}