// Exercise 1
console.log('Exercise 1')
const numbersResult = [];

for(let i = 10; i <= 20; i++){
    numbersResult.push(i)
}

console.log(numbersResult.join())
// Exercise 2
console.log('Exercise 2')
const powResult = [];

for(let i = 10; i <= 20; i++){
    powResult.push(Math.pow(i, 2));
}

console.log(powResult)
// Exercise 3
console.log('Exercise 3')

for(let i = 1; i <= 10; i++){
    console.log(`${i} * 7 =`,i * 7);
}
// Exercise 4
console.log('Exercise 4')

let sumResult = 0;

for(let i = 1; i <= 15; i++){
    sumResult += i;
}

console.log(sumResult)
// Exercise 5
console.log('Exercise 5')

let subResult = 1;

for(let i = 15; i <= 35; i++){
    if(i%2 === 0){
        subResult *= i;
    }
}

console.log(subResult)
// Exercise 6
console.log('Exercise 6')

const DIVIDER = 500;
let betweenNumberResult = 0;

for(let i = 1; i <= DIVIDER; i++){
    betweenNumberResult += i;
}

console.log(betweenNumberResult/DIVIDER)
// Exercise 7
console.log('Exercise 7')

let doubleNumbersResult = 0;

for(let i = 30; i <= 80; i++){
    if(i % 2 === 0){
        doubleNumbersResult += i;
    }
}

console.log(doubleNumbersResult)
// Exercise 8
console.log('Exercise 8')

let divisibleByThreeNumbersResult = [];

for(let i = 100; i <= 200; i++){
    if(i % 3 === 0){
        divisibleByThreeNumbersResult.push(i);
    }
}

console.log(divisibleByThreeNumbersResult)
// Exercise 9,10,11
console.log('Exercise 9,10,11')

let userNumber = prompt('Write your number and I send to you the dividers: ');
const numberDividersResult = [];
const numberDoubleDividersResult = [];

for(let i = 1; i <= Number(userNumber); i++){
    if(userNumber % i === 0){
        numberDividersResult.push(i);
    }
    if(userNumber % i === 0 && i % 2 === 0){
        numberDoubleDividersResult.push(i)
    }
}

const sumDoubleDividersResult = numberDoubleDividersResult.reduce((acc, initialValue) => {
    return acc + initialValue
}, 0)

if(numberDividersResult.length){
    console.log(`Dividers: ${numberDividersResult}`);

    if(numberDoubleDividersResult.length && sumDoubleDividersResult !== 0){
        console.log(`Double dividers: ${numberDoubleDividersResult}`);
        console.log(`Sum double dividers is: ${sumDoubleDividersResult}`);
    } else {
        console.log('Double dividers: There are no such numbers');
        console.log('Sum double dividers is: There are no such numbers');
    }
} else {
    alert('Write please a correct number!')
}
// Exercise 12
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = `, i * j);
    }
}