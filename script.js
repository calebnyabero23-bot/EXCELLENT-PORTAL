document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const portalSection = document.getElementById('portal-section');
    
    const regInput = document.getElementById('reg-input');
    const pReg = document.getElementById('p-reg');
    const pName = document.getElementById('p-name');
    
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');

    // LOGIN ACTION
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 1. Map data
        const idValue = regInput.value;
        pReg.textContent = idValue;
        pName.textContent = idValue;
        
        // 2. THE SWITCH: Hide login, Show portal
        loginSection.classList.add('hidden');
        portalSection.classList.remove('hidden');
        
        // Scroll to top of the new page
        window.scrollTo(0, 0);
    });

    // SIDEBAR TOGGLE
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    // LOGOUT ACTION
    document.getElementById('logout-btn').addEventListener('click', () => {
        portalSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
        sidebar.classList.remove('active');
    });
});