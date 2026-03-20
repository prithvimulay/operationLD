// If a method modifies an object and then ends by returning this (the object itself), you can chain method calls together in a very clean, readable way.


class EmailBuilder {
    constructor() {
        this.email = { to: "", subject: "", body: "" };
    }

    setRecipient(address) {
        this.email.to = address;
        return this; // Returns the whole EmailBuilder object
    }

    setSubject(subjectLine) {
        this.email.subject = subjectLine;
        return this; // Returns the whole EmailBuilder object
    }

    setBody(content) {
        this.email.body = content;
        return this; // Returns the whole EmailBuilder object
    }

    send() {
        console.log(`Sending email to ${this.email.to}...`);
    }
}

// Because each method returns the object, we can chain them!
const myEmail = new EmailBuilder();
myEmail.setRecipient("boss@company.com")
       .setSubject("Project Update")
       .setBody("The project is done.")
       .send();