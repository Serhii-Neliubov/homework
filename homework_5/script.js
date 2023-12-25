
const hours = prompt('Write the hours: ');
function calculateSeconds(hours) {
    const result = hours*3600
    alert(`Seconds in ${hours} hours: ${result}`);
}

calculateSeconds(Number(hours));