/*
Exercise 2: HTTP Status Code
Implement HTTP Status Code
medium
Problem: Create an HttpStatus enum where each status has a numeric code and a message string.

Requirements:

1. Values: OK(200, "OK"), BAD_REQUEST(400, "Bad Request"), NOT_FOUND(404, "Not Found"), INTERNAL_SERVER_ERROR(500, "Internal Server Error")
2. isSuccess() method that returns true if the code is less than 400
3. display() method that prints "CODE MESSAGE" (e.g. "200 OK")
4. A static fromCode(int) method that returns the HttpStatus for a given code, or null/None if not found
*/

class HttpStatus {
    static OK = new HttpStatus(200, "OK");
    static BAD_REQUEST = new HttpStatus(400, "Bad Request");
    static NOT_FOUND = new HttpStatus(404, "Not Found");
    static INTERNAL_SERVER_ERROR = new HttpStatus(500, "Internal Server Error");

    static ALL_VALUES = [
        HttpStatus.OK, HttpStatus.BAD_REQUEST,
        HttpStatus.NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR
    ];

    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    isSuccess() {
        return this.code < 400;
    }

    display() {
        console.log(`${this.code} ${this.message}`);
    }

    static fromCode(code) {
        return HttpStatus.ALL_VALUES.find(s => s.code === code) ?? null;
    }
}

HttpStatus.OK.display();
HttpStatus.NOT_FOUND.display();

console.log(`Is 200 success? ${HttpStatus.OK.isSuccess()}`);
console.log(`Is 404 success? ${HttpStatus.NOT_FOUND.isSuccess()}`);

const found = HttpStatus.fromCode(500);
if (found !== null) {
    process.stdout.write("Found by code 500: ");
    found.display();
}