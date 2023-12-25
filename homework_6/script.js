
const number1 = prompt('Write the first number: ');
const number2 = prompt('Write the second number: ');
const number3 = prompt('Write the third number: ');
function averageNumber(number1, number2, number3) {
    const result = Number(((number1 + number2 + number3) / 3).toFixed(2))
    alert(`Average result: ${result}`)

}

averageNumber(number1, number2, number3);