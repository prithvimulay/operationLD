/*
AIM - You can pass an entire object as an argument into another object's method. This allows objects to communicate and affect each other.
*/

class Fighter {
    #health = 30;                       // Private field

    constructor(name, attackPower){
        this.name = name;
        this.attackPower = attackPower;
    }

    getHealth(){
        return this.#health;
    }

    takeDamage(target){
        this.#health -= target;
        console.log(`${this.name} took ${target} damage. Health is now: ${this.#health}`);
    }

    attack(target){
        console.log(`${this.name} is attacking ${target.name} with ${this.attackPower} power`);
        target.takeDamage(this.attackPower);
    }
    finalize(){
        console.log(`${this.name} has been defeated!`);
    }
}

const ryu = new Fighter("Ryu", 10);
const ken = new Fighter("Ken", 15);

ryu.attack(ken);
ken.attack(ryu);
