const userBirthdayYear = prompt('Write your birthday year: ');
const userCity = prompt('Write your city: ');
const userSport = prompt('Write your favorite sport: ');

const currentYear = new Date().getFullYear()


switch (true){
    case userCity === 'Kharkov':
        break;
}

alert(`
    Your age is: ${currentYear - userBirthdayYear}
`)
