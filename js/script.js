let mapa;
let nomeInput;
let emailInput;
let mensagemInput;
let nomeMensagem;
let emailMensagem;
let mensagemMensagem;

document.addEventListener("DOMContentLoaded", function () {
    mapa = document.getElementById('mapa'); // Inicializa a variável mapa quando o DOM é carregado
    nomeInput = document.querySelector('#nome');
    emailInput = document.querySelector('#email');
    mensagemInput = document.querySelector('#mensagem');
    nomeMensagem = document.querySelector('#nomeMensagem');
    emailMensagem = document.querySelector('#emailMensagem');
    mensagemMensagem = document.querySelector('#mensagemMensagem');
});

function validarNome() {
    const nome = nomeInput.value.trim();

    if (nome.length < 3) {
        nomeInput.style.borderColor = 'red';
        nomeMensagem.textContent = 'O nome deve ter pelo menos 3 letras.';
    } else {
        nomeInput.style.borderColor = 'green';
        nomeMensagem.textContent = '';
    }
}

function validarEmail() {
    const email = emailInput.value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
        emailInput.style.borderColor = 'red';
        emailMensagem.textContent = 'O email deve ser válido.';
    } else {
        emailInput.style.borderColor = 'green';
        emailMensagem.textContent = '';
    }
}

function validarMensagem() {
    let mensagem = mensagemInput.value.trim();

    if (mensagem.length > 100) {
        mensagem = mensagem.slice(0, 100); // Limita a mensagem a 100 caracteres
        mensagemInput.value = mensagem; // Atualiza o valor do campo
        mensagemInput.style.borderColor = 'red';
        mensagemMensagem.textContent = 'A mensagem deve ter no máximo 100 caracteres.';
    } else {
        mensagemInput.style.borderColor = 'green';
        mensagemMensagem.textContent = '';
    }
}

function mapaZoom() {
    mapa.style.width = '900px';
    mapa.style.height = '700px';
}

function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '400px';
}



// leva ao topo do site

document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');

    // Mostra o botão quando o usuário rolar a página para baixo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Comportamento de rolagem suave ao clicar no botão
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});