const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(20, characters);

function generateKey(number, string) {
    let result = [];

    if(string.length < number){
        console.log('Your number is too big!');
        return null;
    }

    for(let i = 0; i < number; i++){
        result.push(characters[(Math.floor(Math.random() * string.length))]);
    }

    return result.join('');
}

console.log(key);