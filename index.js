// Получаем элементы
const modal = document.getElementById('modal');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');

// Открываем модальное окно при нажатии на кнопку

btn.onclick = function () {// eslint-disable-line
  modal.style.display = 'block';
};

// Закрываем модальное окно при нажатии на крестик
close.onclick = function () {// eslint-disable-line
  modal.style.display = 'none';
};

// Закрываем модальное окно при клике за его пределами
window.onclick = function (event) {// eslint-disable-line
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
