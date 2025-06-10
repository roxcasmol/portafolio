// Objeto con las traducciones
const translations = {
    es: {
        // Navegación
        "nav_home": "Inicio",
        "nav_flavors": "Sabores",
        "nav_events": "Eventos",
        "nav_about": "Nosotros",

        // Header
        "header_hashtag": "#Helados",
        "header_artisanal": "Artesanal",
        "header_icecream": "Helado",
        "header_menu_btn": "Menú",

        // Sección Sabores
        "flavors_title": "NUESTROS SABORES",
        "flavors_subtitle": "¡Frescos y sabrosos!",
        "flavors_text": "Descubre nuestra selección de helados artesanales, elaborados con ingredientes frescos y naturales. Desde los clásicos hasta creaciones únicas, cada sabor es una experiencia inolvidable.",
        "flavors_btn": "Menú",

        // Sección Especial
        "special_title": "DISFRUTA",
        "special_subtitle": "LIBRE DE LACTOSA",
        "special_btn": "Menú",

        // Sección Lugar
        "place_title": "Nuestro lugar",
        "place_subtitle": "¡Helado frente al mar!",
        "place_text": "Ubicados en un privilegiado lugar frente al mar, disfruta de nuestros deliciosos helados mientras contemplas las mejores vistas de la costa. Un ambiente relajado y acogedor para toda la familia.",
        "place_btn": "Leer más",

        // Sección Eventos
        "events_title": "CATERING & MÁS",
        "events_subtitle": "eventOs",
        "events_btn": "Pide un deseo",

        // Sección Postres
        "desserts_title": "POSTRES",
        "desserts_subtitle": "¡Helados y más!",
        "desserts_text": "Explora nuestra variedad de postres helados, desde sundaes elaborados hasta creaciones exclusivas. Cada postre es una obra de arte comestible que deleitará tus sentidos.",
        "desserts_btn": "Menú",

        // Footer
        "footer_address_title": "Dirección",
        "footer_address": "Av. Costera 123, Playa del Sol, Ciudad",
        "footer_hours_title": "Horario",
        "footer_hours": "Todos los días\n10AM - 8PM",
        "footer_contact_title": "Contacto",
        "footer_contact": "info@heladeria.com\nTel: 914-123-456",
        "footer_copyright": "Todos los derechos reservados"
    },
    en: {
        // Navigation
        "nav_home": "Home",
        "nav_flavors": "Flavors",
        "nav_events": "Events",
        "nav_about": "About Us",

        // Header
        "header_hashtag": "#IceCream",
        "header_artisanal": "Artisanal",
        "header_icecream": "Ice Cream",
        "header_menu_btn": "Menu",

        // Flavors Section
        "flavors_title": "OUR FLAVORS",
        "flavors_subtitle": "Fresh and Tasty!",
        "flavors_text": "Discover our selection of artisanal ice creams, made with fresh and natural ingredients. From classics to unique creations, each flavor is an unforgettable experience.",
        "flavors_btn": "Menu",

        // Special Section
        "special_title": "ENJOY",
        "special_subtitle": "LACTOSE FREE",
        "special_btn": "Menu",

        // Place Section
        "place_title": "Our Place",
        "place_subtitle": "Ice Cream by the Sea!",
        "place_text": "Located in a privileged spot by the sea, enjoy our delicious ice creams while taking in the best coastal views. A relaxed and welcoming environment for the whole family.",
        "place_btn": "Read More",

        // Events Section
        "events_title": "CATERING & MORE",
        "events_subtitle": "eventS",
        "events_btn": "Make a Wish",

        // Desserts Section
        "desserts_title": "DESSERTS",
        "desserts_subtitle": "Ice Cream and More!",
        "desserts_text": "Explore our variety of ice cream desserts, from elaborate sundaes to exclusive creations. Each dessert is an edible work of art that will delight your senses.",
        "desserts_btn": "Menu",

        // Footer
        "footer_address_title": "Address",
        "footer_address": "123 Coastal Ave, Beachside, City",
        "footer_hours_title": "Hours",
        "footer_hours": "Every day\n10AM - 8PM",
        "footer_contact_title": "Contact",
        "footer_contact": "info@icecream.com\nTel: 914-123-456",
        "footer_copyright": "All rights reserved"
    }
};

// Función para cambiar el idioma
function setLanguage(lang) {
    // Actualizar todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Guardar la preferencia de idioma
    localStorage.setItem('lang', lang);

    // Actualizar la bandera del selector de idioma
    const languageFlag = document.querySelector('.language-flag');
    if (languageFlag) {
        languageFlag.textContent = lang === 'es' ? '🇪🇸' : '🇺🇸';
    }
}

// Inicializar el idioma cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    // Agregar event listeners a los botones de cambio de idioma
    document.querySelectorAll('.language-switcher').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}); 