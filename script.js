console.log("Architetti Trapani Loaded");
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-links-active');

            // Burger Animation (trasforma le linee in una X)
            burger.classList.toggle('toggle');
        });
    }
}

// Funzione per il pulsante contatti
function toggleContactMenu() {
    const widget = document.getElementById('contactWidget');
    const options = widget.querySelector('.contact-options');
    
    if(widget && options) {
        widget.classList.toggle('open');
        options.classList.toggle('active');
    }
}

// Avvia le funzioni quando la pagina è caricata
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
});
