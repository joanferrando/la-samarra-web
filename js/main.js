const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

const navLinks = document.querySelectorAll('.main-nav a');


menuToggle.addEventListener('click', () => {

    const isOpen =
        mainNav.classList.toggle('active');

    menuToggle.setAttribute(
        'aria-expanded',
        isOpen
    );


    if (isOpen) {

        menuToggle.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


navLinks.forEach(link => {

    link.addEventListener('click', () => {

        mainNav.classList.remove('active');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});
