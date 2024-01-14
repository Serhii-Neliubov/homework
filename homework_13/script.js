// Exercise 1
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

const positiveArrayNumbers = arr.filter((number) => number > 0);
const sumPositiveNumbersResult = positiveArrayNumbers.reduce((accumulator, number) => accumulator + number, 0);

console.log('-----------Exercise 1-----------')
console.log('Sum result: ' + sumPositiveNumbersResult);
console.log('Length result: ' + positiveArrayNumbers.length);

//Exercise 2
console.log('-----------Exercise 2-----------')
const minArrayNumber = Math.min(...arr);

console.log('Min: ' + minArrayNumber);
console.log('Index: ' + arr.indexOf(minArrayNumber));

//Exercise 3
const maxArrayNumber = Math.max(...arr);

console.log('-----------Exercise 3-----------')
console.log('Max: ' + maxArrayNumber);
console.log('Index: ' + arr.indexOf(maxArrayNumber));

// Exercise 4
const negativeArrayNumbers = arr.filter((number) => number < 0);

console.log('-----------Exercise 4-----------')
console.log('Negative numbers in array: ' + negativeArrayNumbers.length)

// Exercise 5
const positiveNoDoubleArrayNumbers = positiveArrayNumbers.filter((number) => number % 2 === 1);

console.log('-----------Exercise 5-----------')
console.log('Positive no double numbers in array: ' + positiveNoDoubleArrayNumbers.length)

// Exercise 6
const positiveDoubleArrayNumbers = positiveArrayNumbers.filter((number) => number % 2 === 0);

console.log('-----------Exercise 6-----------')
console.log('Positive double numbers in array: ' + positiveDoubleArrayNumbers.length)

// Exercise 7
const sumDoubleArrayNumbersResult = positiveDoubleArrayNumbers.reduce((accumulator, number) => accumulator + number, 0);

console.log('-----------Exercise 7-----------')
console.log('Sum result no double numbers: ' + sumDoubleArrayNumbersResult)

// Exercise 8
const sumNoDoubleArrayNumbersResult = positiveNoDoubleArrayNumbers.reduce((accumulator, number) => accumulator + number, 0);

console.log('-----------Exercise 8-----------')
console.log('Sum result double numbers: ' + sumNoDoubleArrayNumbersResult)

// Exercise 9
const multiplicationPositiveNumbersResult = positiveArrayNumbers.reduce((accumulator, number) => accumulator * number, 1)

console.log('-----------Exercise 9-----------')
console.log('Multiplication result positive numbers: ' + multiplicationPositiveNumbersResult)

// Exercise 10
console.log('-----------Exercise 10-----------')
let maxNumber = arr[0];
let maxNumberIndexInArray;
const arrayLength = arr.length;

arr.forEach((number, index) => {
    if(arr[index] > maxNumber){
        maxNumber = arr[index];
        maxNumberIndexInArray = index;
    }
})

for(let i = 0; i <= maxNumberIndexInArray; i++){
    arr.splice(arr[i], arr[i+1], 0);
}

arr.push(maxNumber);

for(let i = maxNumberIndexInArray + 1; i < arrayLength; i++){
    arr.push(0);
}

console.log(maxNumber, maxNumberIndexInArray, arr)


