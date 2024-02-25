class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Person: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = this.validateOwner(owner);
    }

    validateOwner(owner) {
        if (owner.age >= 18) {
            return owner;
        } else {
            console.log(`Owner ${owner.name} is under 18 years old. Car cannot be assigned`);
            return null;
        }
    }

    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Owner Information:");
            this.owner.displayInfo();
        } else {
            console.log("No valid owner assigned");
        }
    }
}

let person1 = new Person("Sergey", 25);
let person2 = new Person("Alexey", 17);
let person3 = new Person("Michail", 30);

let car1 = new Car("Toyota", "Camry", 2006, "MAM222", person1);
let car2 = new Car("Honda", "Civic", 2015, "PAP555", person2);
let car3 = new Car("Ford", "Edge", 2022, "BUA888", person3);

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
