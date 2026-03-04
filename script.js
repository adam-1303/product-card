// Покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstCatalogcard = document.querySelector('.product-card');
const blueHashColor = "#0000ff";

recolorFirstCardButton.addEventListener('click', () => {
  firstCatalogcard.style.backgroundColor = blueHashColor;
});

// Покраска всех карточек 

const greenHashColor = "#00ff44";

const catalogCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

recolorAllCardButton.addEventListener('click', () => {
  catalogCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  )
});

// Переход на сайт Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');
  
  if(answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на сайт Google');
  }
}; 

// Заголовок страницы

const title = document.querySelector('h1');
title.addEventListener('mouseover', () => {
  console.log('Заголовок страницы');
});

// Цветная кнопка

const changeColorButton = document.getElementById('change-color-button');
changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('active');
});


