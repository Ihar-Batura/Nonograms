import './style.css';

const btnBurger = document.querySelector('.burger-menu');
const header = document.querySelector('.header-container');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('active');
  header.classList.toggle('active');
});
