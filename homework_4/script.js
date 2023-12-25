
const number1 = prompt('Write the first number: ');
const number2 = prompt('Write the second number: ');
function calculateNumber(number1, number2) {
    alert(`
    ${number1} + ${number2} = ${(number1 + number2).toFixed(2)}
    ${number1} - ${number2} = ${(number1 - number2).toFixed(2)}
    ${number1} * ${number2} = ${(number1 * number2).toFixed(2)}
    ${number1} / ${number2} = ${(number1 / number2).toFixed(2)}
    `);
}

calculateNumber(Number(number1), Number(number2));
