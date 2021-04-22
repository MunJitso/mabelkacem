const topIcon = document.getElementById('iconTop');
const topBottom = document.getElementById('iconBottom');
const humburgerIcon = document.getElementById('humburgerIcon');
const navbarShow = document.querySelector('nav');

humburgerIcon.addEventListener('click', () => {
    topIcon.classList.toggle('rotate-top');
    topBottom.classList.toggle('rotate-bottom');
    navbarShow.classList.toggle('nav-show');
});