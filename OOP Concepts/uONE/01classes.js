// class can have only one constructor 
// constructor is a special method that inside the class that runs automatically and exactly once the very moment you create a new object. It is the setup phase. 
// It takes the raw materials (data) you provide and initializes the object.

class Person {
    constructor(name, age, house) {
        this.nav = name;
        this.vay = age;
        this.ghar = house;
    }


    display() {
        console.log(`Name: ${this.nav}, Age: ${this.vay}, House: ${this.ghar}`);
    }

    lock() {
        console.log(`Locking the house ${this.ghar}`);
    }
    
    unlock() {
        console.log(`Unlocking the house ${this.ghar}`);
    }
}

const person = new Person("Alice", 30, "House 12");  // Creating an object
person.display();                      // Displaying the object's data
person.lock();                         // Locking the house
person.unlock();                       // Unlocking the house


/*
decoding the this keyword, 
apart from being used to distinguish the class's fields from the parameters with the same names. (this.ghar = house)
it also helps for which object are we applying the method to.
*/

class Player {
    constructor(playerName) {
        this.name = playerName; // Setting the specific object's name
        this.score = 0;         // Setting the specific object's score
    }

    // A method shared by all Player objects
    scorePoint() {
        // If we just wrote `score++`, JS would crash. It wouldn't know WHOSE score.
        // `this.score` means "increase the score of the specific object that called this method."
        this.score++; 
        console.log(`${this.name} scored! Total: ${this.score}`);
    }
}

const playerOne = new Player("Alice");
const playerTwo = new Player("Bob");

playerOne.scorePoint(); // Output: Alice scored! Total: 1
playerOne.scorePoint(); // Output: Alice scored! Total: 2
playerTwo.scorePoint(); // Output: Bob scored! Total: 1 (Bob's state is completely separate)


// write a program to understand the constructor overloading
