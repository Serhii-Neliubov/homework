const cities = {'Київ': 'України', 'Лондон': 'Англії', 'Вашингтон': ' Америки',}
const sports = {'Бокс': 'Кличко', 'Футбол': 'Мессі', 'Теніс': ' Тімобол',}

const userBirthdayYear = prompt('Write your birthday year: ');
const userCity = prompt('Write your city: ');
const userSport = prompt('Write your favorite sport: ');

const currentYear = new Date().getFullYear();

let forCityMessage = '';
let forSportMessage = '';
let forBirthdayMessage = '';

    if(Object.keys(sports).find(() => userSport)){
        forSportMessage = `Ти хочеш бути як ${sports[userSport]}?`;
    } else if(userSport) {
        forSportMessage = `Ти займаєшся спортом під назвою: ${userSport}`
    } else {
        forSportMessage = 'Прикро, що ти нічого не написав у спорт :('
    }

    if(Object.keys(cities).find(() => userCity)){
        forCityMessage = `Ти хочеш бути як ${cities[userCity]}?`;
    } else if(userCity) {
        forCityMessage = `Ти займаєшся спортом під назвою: ${userCity}`
    } else {
        forCityMessage = 'Прикро, що ти нічого не написав у місто :('
    }

    if(userBirthdayYear){
        forBirthdayMessage = `You are: ${currentYear - userBirthdayYear}`;
    } else {
        forCityMessage = 'Прикро, що ти нічого не написав у рік народження :('
    }

    alert(`
        ${forBirthdayMessage},
        ${forCityMessage},
        ${forSportMessage}
    `);
