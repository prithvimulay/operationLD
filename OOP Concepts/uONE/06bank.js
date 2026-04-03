/*
Basic class and obj practice
# Exercise 1: Bank Account
Design Bank Account Class
Problem: Create a BankAccount class that manages a simple bank account with deposit, withdrawal, and balance checking functionality.

Requirements:

1. Fields: accountNumber, ownerName, balance
2. Constructor that initializes the account with owner name and account number (balance starts at 0)
3. deposit(amount): adds money to balance (only positive amounts)
4. withdraw(amount): removes money if sufficient balance exists, returns success/failure
5. getBalance(): returns current balance

*/

class BankAccount {

    // fields
    #accountNumber;
    #ownerName;
    #balance;
    
    // the constructor
    constructor(accountNumber, ownerName){
        this.#accountNumber = accountNumber;
        this.#ownerName = ownerName;
        this.#balance = 0;
    }

    deposit(amount){
        if(amount>0){
            this.#balance += amount;
        }
        return this.#balance;
    }

    withdraw(amount){
        if(amount > 0 && this.#balance >= amount){
            this.#balance -= amount;
            console.log("success")
            return true;
        }
        console.log("insufficient bal")
        return false;
    }

    getBalance(){
        return this.#balance;
    }
}

   
const account1 = new BankAccount("A101", "Sam");

const add = account1.deposit(100);
console.log(`current bal is ${account1.getBalance()}`);

const remove = account1.withdraw(500);
console.log(`new bal is ${account1.getBalance()}`);



/*
OUTPUTS:

PS C:\Dev\3Resources\LLD\OOP Concepts\uONE> node .\bank.js
current bal is 100
new bal is 100
PS C:\Dev\3Resources\LLD\OOP Concepts\uONE> node .\bank.js
current bal is 100
insufficient bal
new bal is 100
*/