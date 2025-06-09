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