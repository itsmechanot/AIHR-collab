document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const toggleBg = document.querySelector('.toggle-bg');
    const toggleBg1 = document.querySelector('.toggle-bg1');
    const mobileBreakpoint = 767; 

    function isMobile() {
        return window.innerWidth <= mobileBreakpoint;
    }

    function updateBackground() {
        if (!isMobile()) return; 
        
        if (container.classList.contains('active')) {
            toggleBg.style.opacity = '1';
            toggleBg1.style.opacity = '0';
        } else {
            toggleBg.style.opacity = '0';
            toggleBg1.style.opacity = '1';
        }
    }

    function showRegisterForm(e) {
        if (e) e.preventDefault();
        container.classList.add("active");
        updateBackground();
    }

    function showLoginForm(e) {
        if (e) e.preventDefault();
        container.classList.remove("active");
        updateBackground();
    }

    updateBackground();

    registerBtn.addEventListener('click', showRegisterForm);
    loginBtn.addEventListener('click', showLoginForm);
    if (showRegister) {
        showRegister.addEventListener('click', showRegisterForm);
    }
    if (showLogin) {
        showLogin.addEventListener('click', showLoginForm);
    }
    window.addEventListener('resize', updateBackground);
});