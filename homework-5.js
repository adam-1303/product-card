// Задание №1: Создал функцию которая принимает два параметра.

const showTemperature = (city, temperature) => {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
};

showTemperature("Москва", 20);

/* Задание №2: Создал переменную котороя хранит скорость света.
 Создал функцию котороя проверяет скорость света.*/

const SPEED_LIGHT = 299792458;
const compareSpeed = (speed) => {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Световая скорость');
  }
}

console.log(300000000);
console.log(10);
console.log(299792458);

/* Задание №3: Создал переменную №1 котороя содержит продукт 
и переменную №2 которая содержит его цену */

const buyProduct = 'milk';
const price = 100;

const calculateValue = (budget) => {
  if (budget >= price) {
    console.log(`${buyProduct} приобретен. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`);
  }
}

calculateValue(200);
calculateValue(50);

// Задание №4: Создал функцию.

const greet = (name) => {
  console.log(`Привет, ${name}`);
}

greet('Адам');

// Задание №5: Создал три переменные.

const name = 'Адам';
const age = 20;
const country = 'Россия';

console.log(`Меня зовут ${name}, мне ${age} лет и я из ${country}`);