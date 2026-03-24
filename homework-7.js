import { commentsMedia } from "./comments.js";

//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.slice(4);


// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const car = ['BMW', 'Lada', 'Mercedes', 'Volvo', 'Ferrari'];
const hasCar = car.includes('Lada');


// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArray = (arr) => {
  return arr.reverse();
};

const newArrayCar = reverseArray(car);
const newArrayNumbers = reverseArray(numbers);


// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const hasEmails = commentsMedia.filter(comment => comment.email.includes('.com'));


// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const usersWithPostId = commentsMedia.map(user => ({
  ...user,
  postId: user.id <= 5 ? 2 : 1
}));


// 9. Перебрать массив, что бы объекты состояли только из айди и имени.

const simpleComments = commentsMedia.map(user => ({
  id: user.id,
  name: user.name
}));


// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const validatedComments = commentsMedia.map(message => ({
  ...message,
  isInvaled: message.body.length > 180
}));


// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailsByReduce = commentsMedia.reduce((acc, item) => {
  acc.push(item.email);
  return acc;
}, []);

const emailsByMap = commentsMedia.map(item => item.email);


// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsByString = emails.toString();
const emaisByJoin = emails.join();
