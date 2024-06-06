// Получаем элементы
const modal = document.getElementById('modal');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');

btn.onclick = function () {// eslint-disable-line
  modal.style.display = 'block';
};

close.onclick = function () {// eslint-disable-line
  modal.style.display = 'none';
};

window.onclick = function (event) {// eslint-disable-line
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
