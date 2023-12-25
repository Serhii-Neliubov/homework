
const hours = prompt('Write the hours: ');
function calculateSeconds(hours) {
    const SECONDS_IN_HOUR = 3600
    const result = hours*SECONDS_IN_HOUR
    alert(`Seconds in ${hours} hours: ${result}`);
}

calculateSeconds(Number(hours));
