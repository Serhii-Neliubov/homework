const length = parseInt(prompt("Write array length:"));
const array = [];

if (isNaN(length)) {
    alert('Write the correct number: ');
}

function compareElements(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        return String(a).localeCompare(String(b));
    }
}

for (let i = 0; i < length; i++) {
    const element = prompt("Write the array element:");
    if (Number(element) >= 0 || element === '0') {
        array.push(Number(element));
    } else {
        array.push(element);
    }
}

array.sort(compareElements);
array.splice(1, 3);

console.log("Result:", array);
