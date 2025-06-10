document.addEventListener('DOMContentLoaded', function () {
    // Inicializar todos los tooltips y popovers de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Manejar el scroll del navbar
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Cerrar el navbar colapsable al hacer clic en un enlace (para móviles)
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});

// Función para manejar el envío del formulario
async function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    const emailInput = document.getElementById('email');
    const replyToEmailInput = document.getElementById('replyToEmail');
    if (emailInput && replyToEmailInput) {
        replyToEmailInput.value = emailInput.value;
    }
    
    // Deshabilitar el botón durante el envío
    submitButton.disabled = true;
    submitButton.innerHTML = 'Enviando...';
    
    try {
        const formData = new FormData(form);

        // Establecer el asunto dinámicamente en FormData
        const nameInput = document.getElementById('nombre');
        if (nameInput) {
            formData.set('_subject', `${nameInput.value} quiere contactarte`);
        }
        
        const response = await fetch('https://formsubmit.co/rox.cas.mol@gmail.com', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            // Mostrar mensaje de éxito
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset();
            
            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            throw new Error('Error en el envío');
        }
    } catch (error) {
        // Mostrar mensaje de error
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        
        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    } finally {
        // Restaurar el botón
        submitButton.disabled = false;
        submitButton.innerHTML = 'Enviar Mensaje';
    }
    
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }
}); 