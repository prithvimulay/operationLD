// You can write regular, procedural functions outside of your class that take objects as inputs, process them, or spit out new ones.


class ShoppingCart {
    constructor(customerName) {
        this.customer = customerName;
        this.items = [];
    }

    addItem(item, price) {
        this.items.push({ item, price });
    }

    getTotal() {
        // Simple array reduce to sum up the prices
        return this.items.reduce((sum, current) => sum + current.price, 0);
    }
}

// A standard function OUTSIDE the class
function printReceipt(cartObject) {
    console.log(`--- Receipt for ${cartObject.customer} ---`);
    cartObject.items.forEach(i => console.log(`${i.item}: $${i.price}`));
    console.log(`Total Due: $${cartObject.getTotal()}`);
    console.log(`------------------------------`);
}

const myCart = new ShoppingCart("John Doe");
myCart.addItem("Laptop", 1200);
myCart.addItem("Mouse", 50);

// We pass the object to the external function
printReceipt(myCart);