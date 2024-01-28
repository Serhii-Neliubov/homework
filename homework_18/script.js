function mathPow(num, degree) {
    if (degree === 0) {
        return 1;
    }

    else {
        return num * mathPow(num, degree - 1);
    }
}

let number = 2;
let degree = 3;
let result = mathPow(2, 3);
console.log(`${number}^${degree} = ${result}`);
