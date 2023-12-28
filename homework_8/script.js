const userBirthdayYear = prompt('Write your birthday year: ');
const userCity = prompt('Write your city: ');
const userSport = prompt('Write your favorite sport: ');

const currentYear = new Date().getFullYear();

let forCityMessage = '';
let forSportMessage = '';
let forBirthdayMessage = '';

    if(userCity === 'Київ'){
        forCityMessage = 'Ти живеш у столиці України';
    } else if(userCity === 'Лондон'){
        forCityMessage = 'Ти живеш у столиці Англії';
    } else if(userCity === 'Вашингтон'){
        forCityMessage = 'Ти живеш у столиці Америки';
    } else if(userCity === null) {
        forCityMessage = 'Шкода, що ти не захотів ввести своє місто';
    } else {
        forCityMessage = `Ти живеш у місті ${userCity}`
    }

    if(userSport === 'Бокс'){
        forSportMessage = 'Ти хочеш бути як Віталій Кличко?';
    } else if(userSport === 'Футбол'){
        forSportMessage = 'Ти хочеш бути як Мессі?';
    } else if(userSport === 'Теніс'){
        forSportMessage = 'Ти хочеш бути як Тімобол?';
    } else if(userSport === null) {
        forSportMessage = 'Шкода, що ти не захотів ввести свій спорт';
    }else {
        forSportMessage = `Ти займаєшся спортом під назвою: ${userSport}`
    }

    if(userBirthdayYear === null){
        forBirthdayMessage = 'Шкода, що ти не захотів ввести свій рік народження';
    } else if(userBirthdayYear){
        forBirthdayMessage = `Your age is: ${currentYear - userBirthdayYear}`;
    }

    alert(`
        ${forBirthdayMessage},
        ${forCityMessage},
        ${forSportMessage},
    `);
