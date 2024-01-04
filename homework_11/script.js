// Exercise 1
console.log('Exercise 1');
const halfNumbersResult = [];
for (let i = 20; i <= 30; i += 0.5){
    halfNumbersResult.push(i);
}
console.log(halfNumbersResult.join(' '));

// Exercise 2
console.log('Exercise 2');
for (let i = 10; i <= 100; i += 10){
    console.log(`${i} * 27 = `, i * 27)
}

// Exercise 3
console.log('Exercise 3');
const number = prompt('Write the number: ')

if(!Math.round(Number(number))){
    alert('Write the correct number')
}

for (let i = 1; i*i < number; i++){
    if(i <= 100 && Math.pow(100, 2) >= number){
        console.log(`${i} * ${i} (${i*i}) < `, number);
    }
}
// Exercise 4
console.log('Exercise 4');
const simpleNumberCount = prompt('Write the number: ')
let simpleNumberResult = 0;

if(simpleNumberCount % 1 || Number(simpleNumberCount) < 2){
    alert('Write the correct number')
}

for (let i = 1; i <= simpleNumberCount; i++){
    if(simpleNumberCount % i === 0){
        simpleNumberResult++;
    }
}
console.log(simpleNumberResult === 2 ? 'Simple number!' : 'Not a simple number!');
// Exercise 5
console.log('Exercise 5');
const userNumber = prompt('Write the number: ')
let dividerNumber;

if(!Math.round(Number(userNumber))){
    alert('Write the correct number');
}

for (let i = 1; i <= userNumber; i++){
    if(Math.pow(3, i) === Number(userNumber)) {
        dividerNumber = i;
        alert(`Yes, this is 3^${dividerNumber}!`)
    }
}

!dividerNumber && alert('There is no such number');