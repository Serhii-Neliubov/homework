// Exercise 1
const arr = ['123', null, undefined, 126, true, 23, 583, 'asd', '5321', '@123'];

function betweenValue(array) {
    let arrayLength = 0;
    const numbersSum = array
        .filter((item) => {
            if(typeof item === "number"){
                arrayLength++;
                return item;
            }
        })
        .reduce((accumulator, currentValue) => currentValue + accumulator, 0);
    const result = numbersSum / arrayLength;

    console.log(result);
}

betweenValue(arr);

// Exercise 2
function doMath(x, y, sign) {
    if(sign === '-'){
        console.log(x - y);
    } else if(sign === '+'){
        console.log(x + y);
    } else if(sign === '%'){
        console.log(x % y);
    } else if(sign === '/'){
        console.log(x / y);
    } else if(sign === '^'){
        console.log(x ** y);
    } else if(sign === '*') {
        console.log(x * y);
    }
}

doMath(4, 2, '*')

// Exercise 3
function yourArray() {
    const columns = prompt('Write how many columns you want to have: ');
    const rows = prompt('Write how many rows you want to have in column: ');
    const arr = [];

    if(isNaN(Number(columns))){
        alert('Write true value, please!');
        return null;
    } else if(isNaN(Number(rows))){
        alert('Write true value, please!');
        return null;
    }

    for(let i = 0; i < Number(columns); i++){
        const columnValues = [];

        for(let j = 0; j < Number(rows); j++){
            const value = prompt(`Write the value for | column - ${i + 1} | row - ${j + 1}: `);
            columnValues.push(value);
        }

        arr.push({
            column: i + 1,
            values: columnValues,
        });
    }

    console.log(arr);
}

yourArray()

// Exercise 4
function removeLetters(string, letters) {
    for (let i = 0; i < letters.length; i++) {
        let char = letters[i];
        string = string.split(char).join('');
    }
    return string;
}

let result = removeLetters("Frontend Developer", ['i', 'd', 'p', ' ', 'ooo', 1, null, undefined]);
console.log(result);
