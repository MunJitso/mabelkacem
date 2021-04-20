const header = document.querySelector('header');
const topIcon = document.getElementById('iconTop');
const topBottom = document.getElementById('iconBottom');
const humburgerIcon = document.getElementById('humburgerIcon');
const lines = document.getElementsByClassName('line');
const navbarShow = document.querySelector('nav');

humburgerIcon.addEventListener('click', () => {
    for (i = 0, jen = lines.length; i < jen; i++) {
        lines[i].classList.toggle('line-black');
    }
    topIcon.classList.toggle('rotate-top');
    topBottom.classList.toggle('rotate-bottom');
    navbarShow.classList.toggle('nav-show');
});

this.addEventListener('scroll', () => {
    header.classList.toggle('sticky', this.scrollY > 570);
})