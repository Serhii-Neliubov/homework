
const hours = prompt('Write the hours: ');
function calculateNumber(hours) {
    if(hours === 0){
        alert('You must to write anything!')
    } else {
        const result = hours*3600
        alert(`
        Seconds in ${hours} hours: ${result}
        `);
    }
}

calculateNumber(Number(hours));