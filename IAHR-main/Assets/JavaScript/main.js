document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    // Toggle between forms
    function showRegisterForm() {
        container.classList.add("active");
    }

    function showLoginForm() {
        container.classList.remove("active");
    }

    // Event listeners
    registerBtn.addEventListener('click', showRegisterForm);
    loginBtn.addEventListener('click', showLoginForm);
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        showRegisterForm();
    });
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });
});
//     // Password visibility toggle
//     const passwordInput = document.getElementById('login-password');
//     const eyeIcon = document.querySelector('.fa-eye-slash');
    
//     if (eyeIcon && passwordInput) {
//         eyeIcon.addEventListener('click', function() {
//             if (passwordInput.type === 'password') {
//                 passwordInput.type = 'text';
//                 eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
//             } else {
//                 passwordInput.type = 'password';
//                 eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
//             }
//         });
//     }
// });