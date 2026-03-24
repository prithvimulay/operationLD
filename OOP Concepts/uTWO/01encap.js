/*
Let's practice encapsulation by adding a new field to the Device class. 
We will add a price field to the Device class and ensure that the price is not set below 50.00. 
If the price is set below 50.00, we will set it to 50.00.
*/

class Device {
    #name;
    // TODO: Add price attribute
    #price;

    // TODO: Modify the constructor to also accept a price parameter and initialize it using the setter method
    constructor(name, price) {
        this.#name = name;
        this.setPrice(price);
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
    
    // TODO: Add setPrice method with a condition to ensure the price is not set below 50.00, if so, set it to 50.00
    setPrice(price){
        if (price<50.00){
            this.#price = 50.00;
        } else {
            this.#price = price;
        }
    }

    // TODO: Add getPrice method
    getPrice(){
        return this.#price;
    }
}

// Example usage
const device = new Device('Smartphone', 9.99); // Update constructor call once updated
device.setName('Laptop');
// TODO: Set the price to 49.99

console.log(`Name: ${device.getName()} for ${device.getPrice()}`);

// TODO: Print the price
