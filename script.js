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

            // Accessibilità: aggiorna aria-expanded
            const isOpen = nav.classList.contains('nav-links-active');
            burger.setAttribute('aria-expanded', isOpen);
        });

        // Supporto tastiera per burger menu
        burger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                burger.click();
            }
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
