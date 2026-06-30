async function loadUsers() {

  const usersFromStorage = localStorage.getItem("users");
  const loadingElement = document.querySelector('.message');
  
  if (usersFromStorage) {
    const users = JSON.parse(usersFromStorage);
  
    loadingElement.textContent = '';

    renderUsers(users);
    return users;
  }

  loadingElement.textContent = 'Данные загружаются...';

  setTimeout(async () => {
    
    try {
      const response = await fetch('users.json');

      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }

      const data = await response.json();

      localStorage.setItem('users', JSON.stringify(data.users));

      loadingElement.textContent = '';

      renderUsers(data.users);
    } 
      catch (error) {
      loadingElement.textContent = error.message;
      }
  }, 3000);
}

loadUsers();

function renderUsers(users) {
  const cardsContainer = document.querySelector('.cards');
  const template = document.getElementById('card-template');

  users.forEach(user => {
    const card = template.content.cloneNode(true);

    card.querySelector('.card__id').textContent = `ID: ${user.id}`;
    card.querySelector('.card__name').textContent = `Имя: ${user.name}`;
    card.querySelector('.card__surname').textContent = `Фамилия: ${user.surname}`;
    card.querySelector('.card__age').textContent = `Возраст: ${user.age}`;
    card.querySelector('.card__phone').textContent = `Почта: ${user.email}`;
    card.querySelector('.card__workplace').textContent = `Город: ${user.city}`;

    cardsContainer.append(card);
  });
}

const deleteAllCardsButton = document.getElementById('deleteAllCards');

deleteAllCardsButton.addEventListener('click', () => {
  const cardsContainer = document.querySelector('.cards');

  cardsContainer.innerHTML = '';
  
  localStorage.setItem('users', JSON.stringify([]));
});

const addAllCardsButton = document.getElementById('addAllCards');

addAllCardsButton.addEventListener('click', () => {
  try {
    const usersFromLocalStorage = localStorage.getItem('users');

    if (!usersFromLocalStorage) {
      throw new Error('Идет загрузка...');
    }

    const cardsContainer =
      document.querySelector('.cards');

    if (cardsContainer.children.length > 0) {
      throw new Error('Все карты уже выведены');
    }

    const users = JSON.parse(usersFromLocalStorage);

    renderUsers(users);

  } catch (error) {
    document.querySelector('.message').textContent = error.message;
  }
});

const deleteCardButton = document.getElementById('deleteCard');

deleteCardButton.addEventListener('click', () => {
  try {
    const idToDelete = Number(prompt('Введите ID клиента'));
    const usersFromLocalStorage = localStorage.getItem('users');

    if (!usersFromLocalStorage) {
      throw new Error('Данные отсутствуют');
    }

    const users = JSON.parse(usersFromLocalStorage);
    const filteredUsers = users.filter(user =>
        user.id !== idToDelete
      );

    if (filteredUsers.length === users.length) {
      throw new Error('Клиент не найден');
    }

    localStorage.setItem('users', JSON.stringify(filteredUsers));

    document.querySelector('.cards').innerHTML = '';

    renderUsers(filteredUsers);

  } catch (error) {
    document.querySelector('.message').textContent = error.message;
  }
});
