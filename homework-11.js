class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    console.log(
      `Название: ${this.name},
      Размер: ${this.size},
      Цена: ${this.price}p`);
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
    console.log(`Температура изменена на ${temperature}C`);
  }

  #prepareDrink() {
    console.log(`Начинаем готовить ${this.name}`);
    this.setTemperature(100);
    console.log(`Напиток приготовлен`);
  }

  serveDrink () {
    this.#prepareDrink();
    console.log(`${this.name} подан клиенту`);
  }

};

class Coffee extends Drink {
  constructor(name, size, price, temperature, grains, milk) {
    super(name, size, price, temperature);
    this.grains = grains;
    this.milk = milk;
  }

  getInfo() {
    super.getInfo()

    console.log(`Зерна: ${this.grains}, Молоко: ${this.milk}`);
  }
};

class Tea extends Drink {
  constructor(name, size, price, temperature, fruit, black) {
    super(name, size, price, temperature);
    this.fruit = fruit;
    this.black = black;
  }

  getInfo() {
   super.getInfo()

   console.log(`Фрукт: ${this.fruit}, Тип чая: ${this.black}`);
  }
};

class Lemonade extends Drink {
  constructor(name, size, price, temperature, carbonated, taste) {
    super(name, size, price, temperature);
    this.carbonated = carbonated;
    this.taste = taste;
  }

  getInfo() {
   super.getInfo()

   console.log(`Газированный: ${this.carbonated}, Вкус: ${this.taste}`);
  }
};

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo () {
    console.log(`Кафе: ${this.name}, Адрес: ${this.location}`);
  }

  orderDrink(drink) {
    console.log(`Заказ принят`);
    drink.serveDrink();
  }
};

const cafe = new Cafe("Coffe House", "Kizlyar");

const coffee = new Coffee(
  "Капучино",
  "300ml",
  250,
  20,
  "Arabica",
  "Овсяное"
);

const tea = new Tea(
  "Пуэр",
  "250ml",
  100,
  30,
  "Лемон",
  "Черный"
);

const lemonade = new Lemonade(
  "Мохито",
  "200ml",
  150,
  0,
  "Да",
  "Мятный"
);

cafe.getInfo();

coffee.getInfo();
tea.getInfo();
lemonade.getInfo();

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);