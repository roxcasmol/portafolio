document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos los tooltips y popovers de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Manejar el scroll del navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Asegurar que el toggler del navbar funcione
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }

    // Código existente del carrusel
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselItems = document.querySelectorAll('.carousel-item-custom');
    const numItems = carouselItems.length;
    const angle = 360 / numItems;
    
    // Función para calcular el radio basado en el ancho de la pantalla
    function calculateRadius() {
        const width = window.innerWidth;
        if (width <= 400) return 150;
        if (width <= 576) return 180;
        if (width <= 768) return 220;
        return 350;
    }

    // Función para posicionar los elementos
    function positionItems() {
        const radius = calculateRadius();
        carouselItems.forEach((item, index) => {
            const rotateY = index * angle;
            item.style.transform = `rotateY(${rotateY}deg) translateZ(${radius}px)`;
        });
    }

    // Posicionar elementos inicialmente
    positionItems();

    // Reposicionar elementos cuando cambie el tamaño de la ventana
    window.addEventListener('resize', positionItems);

    // Controlar la animación de rotación
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', () => {
            carouselWrapper.style.animationPlayState = 'paused';
        });

        carouselWrapper.addEventListener('mouseleave', () => {
            carouselWrapper.style.animationPlayState = 'running';
        });

        // Pausar la animación en dispositivos táctiles
        carouselWrapper.addEventListener('touchstart', () => {
            carouselWrapper.style.animationPlayState = 'paused';
        });

        carouselWrapper.addEventListener('touchend', () => {
            carouselWrapper.style.animationPlayState = 'running';
        });
    }
}); 