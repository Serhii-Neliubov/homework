const length = prompt('Write the length: ')
const data = prompt('Write the data: ');
const result = []
console.log(data.length)
if(data.length === Number(length.trim())){
    if(data.includes(' ')){
        result.push(...data.split(' ').sort().splice(0, 2));
        result.push(...data.split(' ').sort().splice(4, data.length));
        console.log(result);
    } else {
        result.push(...data.split(',').sort().splice(0, 1));
        result.push(...data.split(',').sort().splice(4, data.length));
        console.log(result);
    }
} else {
    alert('Dolboeb')
}


