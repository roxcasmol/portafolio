// Inicializar el idioma por defecto cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');
});

// Funcionalidad del botón de búsqueda
document.querySelector('.input-search i').addEventListener('click', () => {
    const searchInput = document.querySelector('.input-search input');
    if (searchInput.value.trim() !== '') {
        // Aquí iría la lógica de búsqueda
        console.log('Buscando:', searchInput.value);
    }
});

// Funcionalidad del botón "ir arriba"
document.querySelector('.btn-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Funcionalidad de los enlaces de navegación
document.querySelectorAll('.enlaces a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Funcionalidad de los botones "Leer más"
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        // Aquí iría la lógica para mostrar el contenido completo
        console.log('Mostrando contenido completo');
    });
}); 

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Verificar que el idioma existe en las traducciones
    if (!translations[lang]) {
        console.error(`El idioma ${lang} no está disponible`);
        return;
    }

    // Actualizar todos los elementos con el atributo data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        } else {
            console.warn(`No se encontró la traducción para la clave "${key}" en el idioma ${lang}`);
        }
    });

    // Actualizar el atributo lang del documento
    document.documentElement.lang = lang;
}