const translations = {
    "es": {
        "navbar_home": "Inicio",
        "navbar_services": "Servicios",
        "navbar_contact": "Contacto",
        "hero_title": "Conectando Código y Hardware",
        "hero_subtitle": "Explorando el Paisaje Digital Futurista",
        "carousel_alt_1": "Interconectividad de Sistemas",
        "carousel_title_1": "Interconectividad de Sistemas",
        "carousel_desc_1": "Diseño de arquitecturas que enlazan cada componente digital.",
        "carousel_alt_2": "Flujo de Datos Optimizado",
        "carousel_title_2": "Flujo de Datos Optimizado",
        "carousel_desc_2": "Canalizando la información con eficiencia para decisiones rápidas.",
        "carousel_alt_3": "Innovación en el Hardware",
        "carousel_title_3": "Innovación en el Hardware",
        "carousel_desc_3": "Integrando componentes de vanguardia para rendimiento superior.",
        "carousel_alt_4": "Desarrollo de Software Escalable",
        "carousel_title_4": "Desarrollo de Software Escalable",
        "carousel_desc_4": "Construyendo código robusto que crece con tus ambiciones.",
        "carousel_alt_5": "Inteligencia Artificial Integrada",
        "carousel_title_5": "Inteligencia Artificial Integrada",
        "carousel_desc_5": "Soluciones inteligentes que automatizan y optimizan procesos.",
        "carousel_alt_6": "Ciberseguridad Proactiva",
        "carousel_title_6": "Ciberseguridad Proactiva",
        "carousel_desc_6": "Protegiendo tu infraestructura digital contra amenazas del futuro.",
        "carousel_alt_7": "Realidad Extendida y Simulación",
        "carousel_title_7": "Realidad Extendida y Simulación",
        "carousel_desc_7": "Creando experiencias inmersivas que difuminan la línea entre lo real y lo digital.",
        "services_title": "Nuestros Núcleos de Servicio",
        "service_1_title": "Arquitectura de Sistemas Conectados",
        "service_1_desc": "Diseñamos plataformas donde cada línea de código y cada chip se entrelazan para una operatividad fluida.",
        "service_2_title": "Optimización de Flujo de Datos",
        "service_2_desc": "Aseguramos que la información fluya a través de tus circuitos digitales, entregando datos cruciales a la velocidad del pensamiento.",
        "service_3_title": "Soluciones de Innovación Futurista",
        "service_3_desc": "Desde la automatización con scripts hasta la integración de IA, creamos soluciones que anticipan el futuro digital.",
        "contact_title": "Inicia tu Transformación Digital",
        "contact_subtitle": "¿Listo para conectar tu visión con el futuro? Cuéntanos sobre tu proyecto. Estamos aquí para construir el mañana digital.",
        "contact_name_label": "Nombre",
        "contact_email_label": "Correo Electrónico",
        "contact_message_label": "Mensaje",
        "contact_submit": "Enviar",
        "footer_copyright": "Todos los derechos reservados.",
        "language_selector": "🇪🇸",
        "language_es": "Español",
        "language_en": "English"
    },
    "en": {
        "navbar_home": "Home",
        "navbar_services": "Services",
        "navbar_contact": "Contact",
        "hero_title": "Connecting Code and Hardware",
        "hero_subtitle": "Exploring the Futuristic Digital Landscape",
        "carousel_alt_1": "System Interconnectivity",
        "carousel_title_1": "System Interconnectivity",
        "carousel_desc_1": "Designing architectures that link every digital component.",
        "carousel_alt_2": "Optimized Data Flow",
        "carousel_title_2": "Optimized Data Flow",
        "carousel_desc_2": "Channeling information efficiently for quick decisions.",
        "carousel_alt_3": "Hardware Innovation",
        "carousel_title_3": "Hardware Innovation",
        "carousel_desc_3": "Integrating cutting-edge components for superior performance.",
        "carousel_alt_4": "Scalable Software Development",
        "carousel_title_4": "Scalable Software Development",
        "carousel_desc_4": "Building robust code that grows with your ambitions.",
        "carousel_alt_5": "Integrated Artificial Intelligence",
        "carousel_title_5": "Integrated Artificial Intelligence",
        "carousel_desc_5": "Intelligent solutions that automate and optimize processes.",
        "carousel_alt_6": "Proactive Cybersecurity",
        "carousel_title_6": "Proactive Cybersecurity",
        "carousel_desc_6": "Protecting your digital infrastructure against future threats.",
        "carousel_alt_7": "Extended Reality and Simulation",
        "carousel_title_7": "Extended Reality and Simulation",
        "carousel_desc_7": "Creating immersive experiences that blur the line between real and digital.",
        "services_title": "Our Service Cores",
        "service_1_title": "Connected Systems Architecture",
        "service_1_desc": "We design platforms where every line of code and every chip intertwine for smooth operation.",
        "service_2_title": "Data Flow Optimization",
        "service_2_desc": "We ensure information flows through your digital circuits, delivering crucial data at the speed of thought.",
        "service_3_title": "Futuristic Innovation Solutions",
        "service_3_desc": "From script automation to AI integration, we create solutions that anticipate the digital future.",
        "contact_title": "Start Your Digital Transformation",
        "contact_subtitle": "Ready to connect your vision with the future? Tell us about your project. We're here to build tomorrow's digital world.",
        "contact_name_label": "Name",
        "contact_email_label": "Email",
        "contact_message_label": "Message",
        "contact_submit": "Send",
        "footer_copyright": "All rights reserved.",
        "language_selector": "🇺🇸",
        "language_es": "Español",
        "language_en": "English"
    }
};

// Función para cambiar el idioma
function setLanguage(lang) {
    console.log('Cambiando idioma a:', lang);
    
    // Actualizar todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Actualizando elemento:', key);
        if (translations[lang] && translations[lang][key]) {
            // Si el elemento es una imagen, actualizar el atributo alt
            if (element.tagName === 'IMG') {
                element.alt = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
            console.log('Texto actualizado:', translations[lang][key]);
        }
    });

    // Guardar la preferencia de idioma
    localStorage.setItem('lang', lang);
    console.log('Idioma guardado en localStorage:', lang);

    // Actualizar la bandera del selector de idioma
    const languageFlag = document.querySelector('.language-flag');
    if (languageFlag) {
        languageFlag.textContent = lang === 'es' ? '🇪🇸' : '🇺🇸';
        console.log('Bandera actualizada:', languageFlag.textContent);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // Cargar el idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    // Agregar event listeners a los botones de cambio de idioma
    document.querySelectorAll('.lang-switcher').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = event.target.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
            }
        });
    });
}); 