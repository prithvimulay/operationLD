/*
Basic class and obj practice
# Exercise 2: Library Book
Design Library Book Class
Problem: Create a Book class for a library management system.

Requirements:

1. Fields: title, author, isbn, isAvailable
2. Constructor that initializes all fields (book starts as available)
3. borrowBook(): marks book as unavailable if currently available, returns success/failure
4. returnBook(): marks book as available
5. displayInfo(): prints book details including availability status
*/


class Book {

    // all the pvt fields
    #title;        // string
    #author;        // string
    #isbn;          // string (ISBN)
    #isAvailable;    // bool

    // the constructor
    constructor(title, author, ISBN){
        this.#author = author;
        this.#title = title;
        this.#isbn = ISBN;
        this.#isAvailable = true;
    }

    borrowBook(){
        // if the book is available - make it isAvailable = false and return true - else return false
        if(this.#isAvailable){
            this.#isAvailable = false;
            return true;
        }
        return false;
    }

    returnBook(){
        this.#isAvailable = true
    }

    displayInfo(){
        const status = this.#isAvailable ? "Available" : "Borrowed"
        // Print: "Title by Author (ISBN: isbn) - Available" or "- Borrowed"
        console.log(`Title by ${this.#author} (ISBN: ${this.#isbn}) - ${status}`);
    }
}

const cpp = new Book ("cpp dsa", "tom ford", "A101");

cpp.displayInfo();

const issueCPP = cpp.borrowBook();
console.log(issueCPP);

cpp.displayInfo();

// try to issue the same book again:
console.log(cpp.borrowBook());       // should get false

cpp.displayInfo();

const returnCPP = cpp.returnBook()

cpp.displayInfo();