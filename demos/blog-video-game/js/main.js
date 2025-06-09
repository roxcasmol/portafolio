// Cargar el contenido desde el JSON
async function cargarContenido() {
    try {
        const response = await fetch('js/content.json');
        const data = await response.json();
        
        // Cargar contenido del header
        document.querySelector('.content-header .badge').textContent = data.header.badge;
        document.querySelector('.content-header h3').textContent = data.header.title;
        document.querySelector('.content-header p').textContent = data.header.description;

        // Cargar contenido de destacados
        const destacados = document.querySelectorAll('.destacados .game');
        data.destacados.forEach((destacado, index) => {
            if (destacados[index]) {
                destacados[index].querySelector('h2').textContent = destacado.title;
                destacados[index].querySelector('p').textContent = destacado.description;
            }
        });

        // Cargar badges
        const badgeContainer = document.querySelector('.badget-container');
        badgeContainer.innerHTML = data.badges.map(badge => 
            `<span class="badge">${badge}</span>`
        ).join('');

        // Cargar artículos
        const articulosContainer = document.querySelector('.container-articulos');
        articulosContainer.innerHTML = data.articulos.map(articulo => `
            <div id="${articulo.id}" class="card">
                <div class="imgBox">
                    <img src="img/card${data.articulos.indexOf(articulo) + 1}.jpg" alt="">
                </div>
                <div class="content">
                    <h3>${articulo.title}</h3>
                    <p>${articulo.description}</p>
                    <a href="#" class="btn">Leer más</a>
                </div>
            </div>
        `).join('');

        // Cargar enlaces del aside
        const asideNav = document.querySelector('aside nav');
        asideNav.innerHTML = data.articulos.map(articulo => 
            `<a href="#${articulo.id}">${articulo.title}</a>`
        ).join('');

        // Cargar footer
        document.querySelector('.copy p').textContent = data.footer.copyright;

        // Agregar event listeners después de cargar el contenido
        agregarEventListeners();
    } catch (error) {
        console.error('Error al cargar el contenido:', error);
    }
}

// Función para agregar todos los event listeners
function agregarEventListeners() {
    // Funcionalidad del botón de búsqueda
    document.querySelector('.input-search i').addEventListener('click', () => {
        const searchInput = document.querySelector('.input-search input');
        if (searchInput.value.trim() !== '') {
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
            console.log('Mostrando contenido completo');
        });
    });
}

// Cargar el contenido cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarContenido); 