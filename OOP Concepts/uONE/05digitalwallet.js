/*
Design a DigitalWallet class.

1. It should have a public ownerName.
2. It should have a strictly private #balance.
3. Create a constructor to set the name and an initial balance.
4. Create a deposit(amount) method.
5. Create a transferFunds(amount, targetWallet) method.
    * This method should check if this wallet has enough money.
    * If it does, subtract the money from this wallet's private balance.
    * Add the money to the targetWallet by calling the target's deposit() method.
6. Write the class, create two wallet objects, and show them transferring money to each other.
*/

class DigiWallet {
    #balance;

    constructor(ownerName) {
        this.ownerName = ownerName;
    }

    setBal(initialBalance) {
        this.#balance = initialBalance;
    }

    getBal() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
        }
    }

    transferFunds(amount, fromWallet, toWallet){
        if (fromWallet.#balance >= amount) {
            fromWallet.#balance -= amount;
            toWallet.deposit(amount);
        }
    }
}

const ram = new DigiWallet("Ram");
const shyam = new DigiWallet("Shyam");

ram.setBal(1000);
shyam.setBal(500);

console.log(`Ram ka bal, ${ram.getBal()}`);
console.log(`Shyam ka bal, ${shyam.getBal()}`);

ram.transferFunds(200, ram, shyam);

console.log(`Ram ka bal after transfer to Shyam, ${ram.getBal()}`);
console.log(`Shyam ka bal after transfer from Ram, ${shyam.getBal()}`);
