const { load } = require('js-yaml');

const colors = {
    "Белый": "#ffffff",
    "Черный": "#000000",
    "Серый": "#808080",
    "Синий": "#0000ff",
    "Красный": "#ff0000",
    "Зеленый": "#00ff00",
    "Желтый": "#ffff00",
    "Оранжевый": "#ffa500",
    "Розовый": "#ffc0cb",
    "Фиолетовый": "#800080",
    "Голубой": "#00ffff",
    "Серебряный": "#c0c0c0",
    "Сине-зеленый": "#008080",
    "Коричневый": "#a52a2a",
    "Золотой": "#ffd700",
    "Салатовый": "#7cfc00",
    "Темно-синий": "#00008b",
    "Темно-красный": "#8b0000",
    "Лимонный": "#fffacd",
    "Оливковый": "#808000",
};

const fonts = {
    "Arial, Helvetica, sans-serif": "Arial, Helvetica, sans-serif",
    "'Arial Black', Gadget, sans-serif": "'Arial Black', Gadget, sans-serif",
    "Georgia, serif": "Georgia, serif",
    "'MS Sans Serif', Geneva, sans-serif": "'MS Sans Serif', Geneva, sans-serif",
    "'MS Serif', 'New York', sans-serif": "'MS Serif', 'New York', sans-serif",
    "Tahoma, Geneva, sans-serif": "Tahoma, Geneva, sans-serif",
    "'Times New Roman', Times, serif": "'Times New Roman', Times, serif",
    "'Trebuchet MS', Helvetica, sans-serif": "'Trebuchet MS', Helvetica, sans-serif",
    "Verdana, Geneva, sans-serif": "Verdana, Geneva, sans-serif"
};


const commonStatus = {
    IN_ACTIVE: 0,
    ACTIVE: 1
};
const commonStatusName = ['Не активен', 'Активен'];

const userStatus = {
    ACTIVE: 1,
    IN_ACTIVE: 2,
    BAN: 3,
    DELETED: 4
};
const userStatusName = ['', 'Активен', 'Не активен', 'Заблокирован', 'Удален'];

const sectionType = {
    НЕИЗВЕСТНО: 0,
    ТАКСИ: 1,
    ЕДА: 2,
    ОТЕЛИ: 3,
    МАРКЕТ: 4,
    ДОСТАВКА: 5,
    АВИА: 6,
    БРОНИРОВАНИЕ: 7
};

const API = {
    key: '516a640f-2853-4824-bf42-c85786d938ee',
    pushKey: '134498f8-eddd-4614-a632-f5fe93be0cce',
    version: '1.0.0',
    url : '',
}

var data;
var urlss;

function getConfig() {
    return fetch('/config.yml')
        .then(response => response.text())
        .then(yamlData => {
            data = load(yamlData);
            urlss = data;
        })
        .catch(error => console.error(error));
}

getConfig().then(() => {
    API.url = urlss.urls.api.promotion;
    // API.url = 'http://localhost:8190/api/v1/';
    // Ваш код, который использует значение API.url
    // console.log(API.url);
});

export {
    API,
    commonStatus,
    commonStatusName,
    userStatus,
    userStatusName,
    sectionType,
    colors,
    fonts,
};