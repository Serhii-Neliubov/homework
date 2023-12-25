function calculateNumber() {

    const number1 = prompt('Write the first number: ');
    const number2 = prompt('Write the first number: ');

    alert(`
    ${number1} + ${number2} = ${Number(number1) + Number(number2)}
    ${number1} - ${number2} = ${Number(number1) - Number(number2)}
    ${number1} * ${number2} = ${Number(number1) * Number(number2)}
    ${number1} / ${number2} = ${(Number(number1) / Number(number2)).toFixed(2)}
    `);
}

calculateNumber();