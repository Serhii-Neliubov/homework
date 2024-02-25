class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };
    static TOPPING_SAUCE = { price: 15, calories: 0 };
    static TOPPING_MAYO = { price: 20, calories: 5 };

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculate() {
        let totalCalories = this.size.calories;
        let totalPrice = this.size.price;

        totalCalories += this.stuffing.calories;
        totalPrice += this.stuffing.price;

        for (let topping of this.toppings) {
            totalCalories += topping.calories;
            totalPrice += topping.price;
        }

        return { calories: totalCalories, price: totalPrice };
    }

    calculatePrice() {
        return this.calculate().price;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate().calories);

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with spice: " + hamburger.calculatePrice());
