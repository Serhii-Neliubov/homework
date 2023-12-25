
const hours = prompt('Write the hours: ');
function calculateNumber(hours) {
    const result = hours*3600
    alert(`Seconds in ${hours} hours: ${result}`);
}

calculateNumber(Number(hours));
