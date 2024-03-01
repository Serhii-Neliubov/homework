class SuperMath {
    check(obj) {
        if (!obj.hasOwnProperty('X') || !obj.hasOwnProperty('Y') || !obj.hasOwnProperty('znak')) {
            console.log("Error: the object must contain the X, Y, and znak properties.");
            return;
        }

        const validOperators = ['+', '-', '/', '*', '%'];

        if (!validOperators.includes(obj.znak)) {
            console.log("Error: invalid operator. Possible operators: + - / * %.");
            return;
        }

        if (isNaN(obj.X) || isNaN(obj.Y) || typeof obj.X !== 'number' || typeof obj.Y !== 'number'){
            console.log("Error: write a correct number.");
            return;
        }

        const answer = prompt(`You want to perform an operation ${obj.X} ${obj.znak} ${obj.Y}? (Yes/No)`);

        if (answer === 'Yes' || 'yes') {
            switch (obj.znak) {
                case '+':
                    console.log(`${obj.X} + ${obj.Y} = ${obj.X + obj.Y}`);
                    break;
                case '-':
                    console.log(`${obj.X} - ${obj.Y} = ${obj.X - obj.Y}`);
                    break;
                case '/':
                    console.log(`${obj.X} / ${obj.Y} = ${obj.X / obj.Y}`);
                    break;
                case '*':
                    console.log(`${obj.X} * ${obj.Y} = ${obj.X * obj.Y}`);
                    break;
                case '%':
                    console.log(`${obj.X} % ${obj.Y} = ${obj.X % obj.Y}`);
                    break;
            }
        } else if (answer === 'No' || 'no') {
            console.log("Enter new values for X, Y, and znak:");
            obj.X = parseFloat(prompt("X:"));
            obj.Y = parseFloat(prompt("Y:"));
            obj.znak = prompt("znak:");

            this.check(obj);
        } else {
            console.log("Incorrect answer. Please enter yes or no.");
        }
    }
}

const obj = { X: 12, Y: 3, znak: "/" };
const obj1 = { X: 12, Y: 3, znak: "+++" };
const obj2 = { X: 12, Y: 3, znak: "+" };
const obj3 = { X: 'asd', Y: 3, znak: "/" };

const superMath = new SuperMath();

superMath.check(obj);
superMath.check(obj1);
superMath.check(obj2);
superMath.check(obj3);
