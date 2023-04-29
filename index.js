
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    burger.parentNode.classList.toggle('show-secondary-nav')
})