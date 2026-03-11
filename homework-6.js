// Задание №1: Создал объект моих данных.

const user = {
  name: 'Adam',
  lastname: 'Magomedov',
  age: 24,
  email: 'Adammagomedov@gmail.com',
  country: 'Russia',
  city: 'Kizlyar'
}

// Задание №2: Создал который хранит данные об автомобиле и добавил свойство владелец авто.

const car = {
  brand: 'BMW',
  model: 'e34',
  year: 1990,
  color: 'Black',
  transmission: 'Getrag 250',
}
car.owner = user;


// Задание №3: Написал функцию которая аргументом принимает объект, описаный в задании №3.

const checkMaxSpeed = (car) => {
  if ('maxSpeed' in car) {
    return;
  } else {
    car.maxSpeed = 250;
  }
}
checkMaxSpeed(car);


/* Задание №4: Написал функцию которая получает первым аргументом - объект,
а вторым аргументом - свойство объекта.*/

const getObjectProperty = (user, city) => {
  console.log(user[city]);
}
getObjectProperty(user, 'city');


// Задание №5: Создал массив.

const products = ['bread', 'milk', 'egg', 'meat', 'cheese']


// Задание №6: Создал массив из объектов.

const books = [
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "бордовая",
    genre: "роман"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "серая",
    genre: "антиутопия"
  },
  {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "зелёная",
    genre: "фэнтези"
  },
  {
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    year: 1943,
    coverColor: "голубая",
    genre: "сказка/философская проза"
  },
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "красная",
    genre: "фэнтези"
  }
];

books.push({
  title: "Фауст",
  author: "Иоганн Вольфганг Гёте",
  year: 1808,
  coverColor: "тёмно-синяя",
  genre: "драма"
});


// Задание №7: Создал еще один массив состоящий из тех же книг, но относящийся к определенной вселенной.*.

const myBooks = [
    {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "чёрная",
    genre: "роман"
  },
  {
    title: "451 градус по Фаренгейту",
    author: "Рэй Брэдбери",
    year: 1953,
    coverColor: "оранжевая",
    genre: "антиутопия"
  },
  {
    title: "Хоббит",
    author: "Дж. Р. Р. Толкин",
    year: 1937,
    coverColor: "зелёная",
    genre: "фэнтези"
  }
];

const library = [...books, ...myBooks];