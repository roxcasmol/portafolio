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