document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeBtn = document.getElementById('toggleTheme');
    const body = document.body;

    // Funcionalidade de alternância de tema
    toggleThemeBtn.textContent = 'Modo Escuro';

    toggleThemeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            toggleThemeBtn.textContent = 'Modo Claro';
        } else {
            toggleThemeBtn.textContent = 'Modo Escuro';
        }
    });

    // Rolagem suave para as âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Ajuste para o cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});
