const length = prompt("Write array length:");
const array = [];

if(isNaN(parseInt(length))){
    alert('Write the correct number: ');
}

function compareNumbers(a, b) {
    return a - b;
}

for (let i = 0; i < parseInt(length); i++) {
    const element = prompt("Write the array element:");
    if(Number(element) >= 0){
        array.push(Number(element));
    } else {
        array.push(element)
    }
}

array.sort(compareNumbers).splice(1, 3);

console.log("Result:", array);
