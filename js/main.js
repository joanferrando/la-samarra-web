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


/* =========================================================
   REPRODUCTOR DE MÚSICA
========================================================= */

const music = document.getElementById('background-music');

const playButton = document.getElementById('play-button');

const muteButton = document.getElementById('mute-button');


if (music && playButton && muteButton) {


    /* PLAY / PAUSE */

    playButton.addEventListener('click', () => {

        if (music.paused) {

            music.play();

            playButton.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

            playButton.setAttribute(
                'aria-label',
                'Pausar música'
            );

        } else {

            music.pause();

            playButton.innerHTML =
                '<i class="fa-solid fa-play"></i>';

            playButton.setAttribute(
                'aria-label',
                'Reproduir música'
            );

        }

    });


    /* MUTE / DESMUTE */

    muteButton.addEventListener('click', () => {

        music.muted =
            !music.muted;


        if (music.muted) {

            muteButton.innerHTML =
                '<i class="fa-solid fa-volume-xmark"></i>';

            muteButton.setAttribute(
                'aria-label',
                'Activar so'
            );

        } else {

            muteButton.innerHTML =
                '<i class="fa-solid fa-volume-high"></i>';

            muteButton.setAttribute(
                'aria-label',
                'Silenciar música'
            );

        }

    });


    /* Quan acaba la cançó */

    music.addEventListener('ended', () => {

        playButton.innerHTML =
            '<i class="fa-solid fa-play"></i>';

        playButton.setAttribute(
            'aria-label',
            'Reproduir música'
        );

    });

}
