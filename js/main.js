
const swup = new Swup();

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('mob-is-active');
});

// console.log('patience is a virtue, good luck with that!')