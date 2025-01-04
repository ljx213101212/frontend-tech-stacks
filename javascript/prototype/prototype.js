class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}

class Bob extends Person {

    work() {
        console.log(`${this.name} is working`);
    }
}

console.dir(Person.prototype); //{constructor: ƒ, sayHello: ƒ}
Person.prototype.name = 'Default';
Person.prototype.sayHello = function () {
    console.log("overwritten");
}
Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
};
const alice = new Person('Alice');
console.log(alice.name); 
alice.sayHello();
alice.greet();

console.dir(Bob.prototype);
const bob = new Bob('Bob');
bob.sayHello();
bob.work()
console.dir(bob.__proto__, bob.__proto__.__proto__, bob.__proto__.__proto__.__proto__);


function Person2 (name) {
    this.name = name;
    this.sayHello = () => {
        return `Hello, ${this.name}`;
    }
    this.array = [1,2,3]
}

console.dir(Person2.prototype);//{constructor: ƒ}
Person2.prototype.array = [3,4,5]
Person2.prototype.sayHello = () => {
    return "Overwritten";
}
console.dir(Person2.prototype);//{constructor: ƒ}
const p2 = new Person2("Alice");
console.log(p2.array);
console.log(p2.sayHello(), Person2.prototype.sayHello())
console.dir(p2, p2.__proto__.array, p2.__proto__.sayHello(), p2.__proto__.__proto__.toString());

