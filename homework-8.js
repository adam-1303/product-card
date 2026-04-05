import { productCard } from "./product-card.js";

// (Задание №4): Метод reduce.
const productDescriptionMap = productCard.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc;
}, {});



// (задание №3): Шаблон для продуктовых карточек.
const template = document.getElementById('product-card-template');
const list = document.getElementById('product-card-list');


function renderCards(cards, amount) {
  list.innerHTML = '';

  cards.slice(0, amount).forEach(card => {
    const clone = template.content.cloneNode(true);

    const title = clone.querySelector('.product-card__title');
    const img = clone.querySelector('.product-card__img');
    const desc = clone.querySelector('.product-card__descr');
    const price = clone.querySelector('.product-card__price');
    const subtitle = clone.querySelector('.product-card__for-skin');

    title.textContent = card.title;
    desc.textContent = card.description;
    subtitle.textContent = card.subtitle;
    price.textContent = `${card.price} ₽`;

    img.src = `images/${card.img}.png`;
    img.alt = card.title;

    list.appendChild(clone);
  });
};

// (Задание №5): Функцию, которая при старте страницы выводит сообщение "Сколько карточек отобразить?
function getAmount() {
  const value = Number(prompt('Сколько карточек отобразить? От 1 до 5'));

  if (value >= 1 && value <= 5) {
    return value;
  }

  return 0;
};

const amount = getAmount();

if (amount) {
  renderCards(productCard, amount);
};


