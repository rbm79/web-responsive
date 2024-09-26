document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const toggleViewBtn = document.getElementById('toggleViewBtn');

    toggleViewBtn.addEventListener('click', function() {
        gallery.classList.toggle('list-view');
        toggleViewBtn.textContent = gallery.classList.contains('list-view') 
            ? 'Visualização em Grade' 
            : 'Visualização em Lista';
    });
});
