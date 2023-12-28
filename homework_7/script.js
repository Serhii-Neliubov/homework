const operation = prompt('Write the operation (add, sub, mult or div): ');
const firstNumber = Number(prompt('Write the first number: '));
const secondNumber = Number(prompt('Write the second number: '));

switch (operation){
    case 'add':
        const addResult = firstNumber + secondNumber;
        alert(`result: ${firstNumber} + ${secondNumber} = ${addResult}`);
        break;
    case 'sub':
        const subResult = firstNumber - secondNumber;
        alert(`result: ${firstNumber} - ${secondNumber} = ${subResult}`);
        break;
    case 'mult':
        const multResult = firstNumber * secondNumber;
        alert(`result: ${firstNumber} * ${secondNumber} = ${multResult}`);
        break;
    case 'div':
        const divResult = (firstNumber / secondNumber).toFixed(2);
        alert(`result: ${firstNumber} / ${secondNumber} = ${divResult}`);
        break
    default:
        alert('Write the correct operation!')
}

