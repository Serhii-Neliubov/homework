// Exercise 1
console.log('Exercise 1');
const halfNumbersResult = [];
for (let i = 20; i <= 30; i += 0.5){
    halfNumbersResult.push(i);
}
console.log(halfNumbersResult);

// Exercise 2
console.log('Exercise 2');
const dollarsPriceResult = [];
for (let i = 20; i <= 100; i += 10){
    dollarsPriceResult.push(i * 27);
}
console.log(dollarsPriceResult);

// Exercise 3
// console.log('Exercise 3');
// const number = prompt('Write the number: ')
//
// if(!Math.round(Number(number))){
//     alert('Write the correct number')
// }
//
// for (let i = 1; i*i < number; i++){
//     if(i <= 100){
//         console.log(`${i} * ${i} (${i*i}) < `, number);
//     }
// }
// Exercise 4
// console.log('Exercise 4');
// const isSimpleNumber = prompt('Write the number: ')
// let isSimpleNumberResult = 0;
//
// if(!Math.round(Number(isSimpleNumber)) || Number(isSimpleNumber) < 2){
//     alert('Write the correct number')
// }
//
// for (let i = 1; i <= isSimpleNumber; i++){
//     if(isSimpleNumber % i === 0){
//         isSimpleNumberResult++;
//     }
// }
// isSimpleNumberResult === 2 ? console.log('Simple number!') : console.log('Not a simple number!')
// Exercise 5
console.log('Exercise 5');
const userNumber = prompt('Write the number: ')
let dividerNumber;

if(!Math.round(Number(userNumber))){
    alert('Write the correct number');
}

for (let i = 1; i <= userNumber; i++){
    if(Math.pow(i, 3) === Number(userNumber)) {
        dividerNumber = i;
        alert(`Yes, this is ${dividerNumber}^3!`)
    }
}