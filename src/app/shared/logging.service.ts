export class LoggingService {
    logIngredienceAdded(name: string, amount: number) {
        console.log('A ingredient was added: ' + name + ', amount: ' + amount);
    }
}