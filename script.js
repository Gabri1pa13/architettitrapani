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


/* Google Ads base tag + conversion tracking (Studio 4e) */ (function(){var gs=document.createElement('script');gs.async=true;gs.src='https://www.googletagmanager.com/gtag/js?id=AW-960404172';document.head.appendChild(gs);window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config','AW-960404172');function fireConversion(s,x){gtag('event','conversion',Object.assign({send_to:s},x||{}));}document.addEventListener('click',function(e){var t=e.target;var wa=t&&t.closest&&t.closest('a[href*="wa.me"]');if(wa){fireConversion('AW-960404172/3zUGCL_QjuUcEMy1-skD');return;}var tel=t&&t.closest&&t.closest('a[href^="tel:"]');if(tel){fireConversion('AW-960404172/pglBCLrRjuUcEMy1-skD',{value:1.0,currency:'EUR'});}},true);})();
