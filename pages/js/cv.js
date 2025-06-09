document.addEventListener('DOMContentLoaded', function() {
    // Script para el efecto de scroll en el Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Configuración por defecto para los gráficos
    const defaultChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + (context.chart.config.type === 'doughnut' || context.chart.config.type === 'polarArea' ? '%' : '%');
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#e0e0e0'
                },
                display: true
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#e0e0e0'
                },
                display: true
            }
        }
    };

    // Colores consistentes
    const primaryColor = '#149ddd';
    const lightBlue = '#17a2b8';
    const darkGrey = '#343a40';
    const lighterText = '#e0e0e0';
    
    const chartBackgroundColors = [
        'rgba(20, 157, 221, 0.8)', // primary
        'rgba(23, 162, 184, 0.8)', // info
        'rgba(40, 167, 69, 0.8)', // success
        'rgba(255, 193, 7, 0.8)', // warning
        'rgba(220, 53, 69, 0.8)', // danger
        'rgba(108, 117, 125, 0.8)', // secondary
        'rgba(52, 58, 64, 0.8)' // dark
    ];

    // Lenguajes de Programación (Bar Chart)
    const languagesData = [
        { label: 'PHP', value: 85 },
        { label: 'JavaScript', value: 90 },
        { label: 'Python', value: 65 },
        { label: 'HTML5', value: 95 },
        { label: 'CSS3 (incl. SASS)', value: 95 },
        { label: 'SQL', value: 80 },
        { label: 'Java', value: 50 }
    ];
    const languagesCanvas = document.getElementById('languagesChart');
    if (languagesCanvas) {
        new Chart(languagesCanvas, {
            type: 'bar',
            data: {
                labels: languagesData.map(d => d.label),
                datasets: [{
                    label: 'Nivel de Conocimiento',
                    data: languagesData.map(d => d.value),
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    borderWidth: 1
                }]
            },
            options: {
                ...defaultChartOptions,
                indexAxis: 'y',
            }
        });
    }

    // Frameworks & Librerías (Radar Chart)
    const frameworksData = [
        { label: 'Angular', value: 90 },
        { label: 'Node.js (Express)', value: 80 },
        { label: 'React', value: 80 },
        { label: 'Bootstrap', value: 90 },
        { label: 'Symfony', value: 65 }
    ];
    const frameworksCanvas = document.getElementById('frameworksChart');
    if (frameworksCanvas) {
        new Chart(frameworksCanvas, {
            type: 'radar',
            data: {
                labels: frameworksData.map(d => d.label),
                datasets: [{
                    label: 'Nivel de Conocimiento',
                    data: frameworksData.map(d => d.value),
                    backgroundColor: 'rgba(20, 157, 221, 0.2)',
                    borderColor: primaryColor,
                    pointBackgroundColor: primaryColor,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: primaryColor
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        pointLabels: {
                            color: lighterText
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Bases de Datos (Doughnut Chart)
    const databasesData = [
        { label: 'MySQL', value: 85 },
        { label: 'MongoDB', value: 75 },
        { label: 'SQL Server', value: 70 }
    ];
    const databasesCanvas = document.getElementById('databasesChart');
    if (databasesCanvas) {
        new Chart(databasesCanvas, {
            type: 'doughnut',
            data: {
                labels: databasesData.map(d => d.label),
                datasets: [{
                    label: 'Nivel de Conocimiento',
                    data: databasesData.map(d => d.value),
                    backgroundColor: chartBackgroundColors.slice(0, databasesData.length),
                    borderColor: darkGrey,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                        labels: { color: lighterText }
                    },
                    tooltip: defaultChartOptions.plugins.tooltip
                }
            }
        });
    }

    // Herramientas & Plataformas (Bar Chart)
    const toolsData = [
        { label: 'Moodle (Desarrollo de Plugins)', value: 90 },
        { label: 'Docker', value: 80 },
        { label: 'Git / GitHub', value: 85 },
        { label: 'AWS (QuickSight, Polly, ElevenLabs)', value: 85 },
        { label: 'DevOps (CI/CD, Despliegue en Nube)', value: 75 },
        { label: 'Android (Desarrollo Móvil)', value: 60 },
        { label: 'iOS (Desarrollo Móvil)', value: 60 },
        { label: 'Inteligencia Artificial (IA) / Machine Learning (ML)', value: 75 }
    ];
    const toolsCanvas = document.getElementById('toolsChart');
    if (toolsCanvas) {
        new Chart(toolsCanvas, {
            type: 'bar',
            data: {
                labels: toolsData.map(d => d.label),
                datasets: [{
                    label: 'Nivel de Conocimiento',
                    data: toolsData.map(d => d.value),
                    backgroundColor: lightBlue,
                    borderColor: lightBlue,
                    borderWidth: 1
                }]
            },
            options: {
                ...defaultChartOptions,
                indexAxis: 'y',
            }
        });
    }

    // Metodologías & Buenas Prácticas (Polar Area Chart)
    const methodologiesData = [
        { label: 'Agile / Scrum', value: 90 },
        { label: 'Arquitectura Limpia & Componentes Reutilizables', value: 88 },
        { label: 'Resolución de Problemas Complejos', value: 92 },
        { label: 'Diseño y Consumo de APIs & Microservicios', value: 85 }
    ];
    const methodologiesCanvas = document.getElementById('methodologiesChart');
    if (methodologiesCanvas) {
        new Chart(methodologiesCanvas, {
            type: 'polarArea',
            data: {
                labels: methodologiesData.map(d => d.label),
                datasets: [{
                    label: 'Nivel de Conocimiento',
                    data: methodologiesData.map(d => d.value),
                    backgroundColor: chartBackgroundColors.slice(0, methodologiesData.length),
                    borderColor: darkGrey,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                        labels: { color: lighterText }
                    },
                    tooltip: defaultChartOptions.plugins.tooltip
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}); 