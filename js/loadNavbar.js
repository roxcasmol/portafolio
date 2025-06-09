document.addEventListener('DOMContentLoaded', function() {
    const currentPathname = window.location.pathname;
    let navbarPath = '';

    // Determinar la ruta relativa al navbar.html
    if (currentPathname.endsWith('/index.html') || currentPathname === '/') {
        navbarPath = './components/navbar.html'; // Desde la raíz del portafolio
    } else if (currentPathname.startsWith('/pages/')) {
        navbarPath = '../components/navbar.html'; // Desde la carpeta pages/
    }

    fetch(navbarPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;

                // Activar el enlace del navbar correspondiente a la página actual
                const path = window.location.pathname;
                const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
                
                // Determine if the current page is index.html
                const isIndexPage = currentPathname === '/' || currentPathname.endsWith('/index.html');

                // Logic to set active link on initial load or for separate pages
                if (!isIndexPage) {
                    navLinks.forEach(link => {
                        const linkHref = new URL(link.href).pathname.replace(/^\/|#.*$/g, '');
                        const currentPathClean = path.replace(/^\/|#.*$/g, '');

                        if (currentPathClean === '' && linkHref === 'index.html') {
                            link.classList.add('active');
                        } else if (currentPathClean === linkHref) {
                            link.classList.add('active');
                        } else if (currentPathClean.startsWith('pages/') && linkHref.startsWith('pages/') && currentPathClean.includes(linkHref.split('/').pop())) {
                            link.classList.add('active');
                        }
                    });
                } else {
                    // Logic for index.html: scroll-based active links
                    const sections = document.querySelectorAll('section[id]');
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;

                    const setActiveLinkByScroll = () => {
                        let currentActiveSectionId = 'home'; // Por defecto, si no se encuentra otra sección

                        // Si el scroll está en la parte superior, siempre activar 'home'
                        if (window.scrollY === 0) {
                            currentActiveSectionId = 'home';
                        } else {
                            sections.forEach(section => {
                                const sectionTop = section.offsetTop - navbarHeight - 1; // Ajuste para el navbar y un pequeño margen
                                const sectionBottom = sectionTop + section.offsetHeight;

                                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                                    currentActiveSectionId = section.id;
                                }
                            });
                        }

                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            const linkHash = link.getAttribute('href').split('#')[1];
                            
                            if (linkHash === currentActiveSectionId) {
                                link.classList.add('active');
                            }
                        });
                    };

                    window.addEventListener('scroll', setActiveLinkByScroll);

                    // Establecer el enlace activo al cargar la página
                    setActiveLinkByScroll();
                }

                // Manejar el scroll del navbar para agregar la clase 'scrolled'
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    window.addEventListener('scroll', function() {
                        if (window.scrollY > 50) { /* Puedes ajustar este valor */
                            navbar.classList.add('scrolled');
                        } else {
                            navbar.classList.remove('scrolled');
                        }
                    });
                    // Aplicar la clase 'scrolled' al cargar si ya hay scroll
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    }
                }

                // Inicializar todos los tooltips y popovers de Bootstrap (si es necesario)
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl)
                });
            } else {
                console.error('Placeholder del navbar no encontrado: #navbar-placeholder');
            }
        })
        .catch(error => console.error('Error cargando el navbar:', error));
}); 