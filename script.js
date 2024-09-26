document.addEventListener('DOMContentLoaded', function() {
    // Espera o DOM carregar completamente antes de executar o código

    // Seleciona os elementos necessários
    const changeColorBtn = document.getElementById('changeColorBtn');
    const main = document.querySelector('main');

    // Adiciona um event listener ao botão
    changeColorBtn.addEventListener('click', function() {
        // Gera uma cor aleatória
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        // Aplica a cor aleatória ao fundo do elemento main
        main.style.backgroundColor = "#" + randomColor;
    });
});
