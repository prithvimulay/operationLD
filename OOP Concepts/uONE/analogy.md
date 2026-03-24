# Analogy for oops (no code)

## Case study 1

### Real World Example: Game GTA

* what will it have logically:

1. city 
    -> houses
        -> roof
        -> walls
        -> doors
        -> windows
    -> roads
        -> lanes
        -> traffic lights
    -> car
        -> color
        -> wheels
        -> model
        -> brand
        -> speed
    -> buildings
        -> parking
    -> people
        -> hands
        -> legs
        -> eyes
        -> NPCs
    -> hospitals
        -> doctors
        -> nurses
        -> patients
        -> beds
    -> police stations
        -> police officers
        -> jails
        
what will u do - to build a city  - u think in terms of objects and their interactions, instead of writing functions 
so to create the city we have organised everything around objects(people, cars, buildings, etc.) and their interactions and then will need to specify the relationships between objects (who will have houses - the people, who will have cars - the people, where will we drive the cars - the roads, etc.)

### Real World Example: E-commerce

amazon -> Users, Products, Cart, Orders, Payments, etc.

### Real World Example: Banking System

bank -> Accounts, Customers, Transactions, Loans, etc.


## Abstraction
* hide all the complications of the code and only expose what the user really needs to interact with
* eg a car - you don't need to know how the engine works, you just need to know how to drive it, start it, stop it, etc.
* all the internal complexity are hidden from the user - u don't need to know how it works internally

### Coffee Machine Analogy

1. Machine class has a method called makeCoffee() - this is the abstraction
2. when u call makeCoffee(), u don't need to know how the machine works internally
3. u just need to know that it will make coffee
4. abstracted part:
Machine
    // PRIVATE
    // Properties that are hidden from the user:
    -> waterTank: Number
    -> coffeeBeans: Bool
    -> heaterOn: Bool

    // Methods that are hidden from the user:
    -> startBoiling(): void
    -> brew(): string
    -> dispense(): void

    // PUBLIC
    // Method that is exposed to the user: 
    -> makeCoffee(): string

    * smart way to know what to hide and what not to hide:
    1. ask yourself - what does the end-user interact with this feature?
    like user doesn't boil the water or brew the coffee - it is the machine that does it
    2. so boil and brew are hidden from the user
    3. so the user only interacts with the makeCoffee() method which will use all the internal methods

## Encapsulation
* bundling the data and methods that operate on that data within a single unit (class)
* restricts direct access to some of an object's components, which means that the internal representation of an object is hidden from the outside
* only the public methods are accessible from outside the class
* helps to achieve data hiding and abstraction
* example: a car's engine is encapsulated within the car - you can't directly access or modify the engine's internal components

how is it different from abstraction?
- the main diff is the "purpose" - in a washing machine user is not entitled to rotate the drum, open the water inlet, drain the water from the drun - he will just be starting and stopping the machine ( it is not about restricting - more about hiding the complexity). Abstraction is more about how the object works
- in encapsulation, i never will hide the methods - they are always exposed to the user, but the data is hidden => the properties are hidden - like balance in a bank account. Encapsulation is more about how the data is stored and accessed (how the object's state is managed/protected)
- A is to hind the complexity (the methods) | E is to protecting a particular internal value (the data)

### Bank Account Analogy:

   // property: PVT
   -> balance: Number

   // methods: PUB
   -> deposit(amount: Number): void
   -> withdraw(amount: Number): void
   -> getBalance(): Number



## Inheritance
eg: a family - parents pass on traits to their children but not to their pet dog
u can also have traits of ur own that are not inherited from parents (override the parent's methods)

it allows a class (child class) to acquire properties and methods of another class (parent class), to reduce the duplication of code and to promote code reusability