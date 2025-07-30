// Contact form submission handler
import { saveContactForm } from '../lib/firebase.js';

export function initializeContactForm() {
  const form = document.querySelector('.contacto-form');
  
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      nombre: form.querySelector('#nombre').value.trim(),
      apellido: form.querySelector('#apellido').value.trim(),
      correo: form.querySelector('#correo').value.trim(),
      empresa: form.querySelector('#empresa').value.trim(),
      mensaje: form.querySelector('#mensaje').value.trim()
    };

    // Validate required fields
    if (!formData.nombre || !formData.apellido || !formData.correo || !formData.mensaje) {
      showMessage('Por favor, completa todos los campos requeridos.', 'error');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      showMessage('Por favor, ingresa un correo electrónico válido.', 'error');
      return;
    }

    // Show loading state
    const submitButton = form.querySelector('.form-submit');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span>Enviando...</span><svg class="submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    submitButton.disabled = true;

    try {
      // Save to Firebase
      const result = await saveContactForm(formData);
      
      if (result.success) {
        showMessage('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.', 'success');
        form.reset();
      } else {
        showMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
    } finally {
      // Restore button state
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });
}

function showMessage(message, type) {
  // Remove existing messages
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const messageElement = document.createElement('div');
  messageElement.className = `form-message form-message-${type}`;
  messageElement.textContent = message;
  
  // Add styles
  messageElement.style.cssText = `
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: 500;
    text-align: center;
    ${type === 'success' 
      ? 'background-color: #d1fae5; color: #065f46; border: 1px solid #10b981;' 
      : 'background-color: #fee2e2; color: #991b1b; border: 1px solid #ef4444;'
    }
  `;

  // Insert message after form
  const form = document.querySelector('.contacto-form');
  form.parentNode.insertBefore(messageElement, form.nextSibling);

  // Auto-remove message after 5 seconds
  setTimeout(() => {
    if (messageElement.parentNode) {
      messageElement.remove();
    }
  }, 5000);
} 