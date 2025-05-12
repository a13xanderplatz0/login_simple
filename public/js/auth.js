// Funciones de autenticación
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar funcionalidad de toggle password
    initTogglePassword();
});

// Función para alternar la visibilidad de la contraseña
function togglePassword(button) {
    try {
        const inputId = button.getAttribute('data-target');
        const input = document.getElementById(inputId);
        const icon = button.querySelector('i');
        
        if (!input || !icon) {
            console.error('No se pudo encontrar el input o el ícono');
            return;
        }

        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    } catch (error) {
        console.error('Error al alternar la visibilidad de la contraseña:', error);
    }
}

// Inicializar los listeners para los botones de toggle password
function initTogglePassword() {
    try {
        const toggleButtons = document.querySelectorAll('.toggle-password');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                togglePassword(this);
            });
        });
    } catch (error) {
        console.error('Error en initTogglePassword:', error);
    }
}

// Manejar el envío del formulario de inicio de sesión
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Iniciando sesión...');
});

// Manejar el envío del formulario de registro
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log('Registrando usuario...');
});
