let mapa;
let input;
let email;
let mensagemInput;
let mensagemNome;
let mensagemEmail;
let mensagem;

document.addEventListener("DOMContentLoaded", function () {
  mapa = document.getElementById("mapa"); // Inicializa a variável mapa quando o DOM é carregado
  input = document.querySelector("#nome");
  email = document.querySelector("#email");
  mensagemInput = document.querySelector("#mensagem");
  mensagemNome = document.querySelector("#mensagemNome");
  mensagemEmail = document.querySelector("#mensagemEmail");
  mensagem = document.querySelector("#mensagem");
});

function validarNome() {
  const nome = input.value.trim();

  if (nome.length < 3) {
    input.style.borderColor = "red";
    mensagemNome.textContent = "O nome deve ter pelo menos 3 letras.";
  } else {
    input.style.borderColor = "green";
    mensagemNome.textContent = "";
  }
}

function validarEmail() {
  const email = email.value.trim();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    email.style.borderColor = "red";
    mensagemEmail.textContent = "O email deve ser válido.";
  } else {
    email.style.borderColor = "green";
    mensagemEmail.textContent = "";
  }
}

function validarMensagem() {
  let mensagem = mensagemInput.value.trim();

  if (mensagem.length > 100) {
    mensagem = mensagem.slice(0, 100);
    mensagemInput.value = mensagem;
    mensagemInput.style.borderColor = "red";
    mensagem.textContent = "A mensagem deve ter no máximo 100 caracteres.";
  } else {
    mensagemInput.style.borderColor = "green";
    mensagemMensagem.textContent = "";
  }
}

function mapaZoom() {
  mapa.style.width = "900px";
  mapa.style.height = "700px";
}

function mapaNormal() {
  mapa.style.width = "400px";
  mapa.style.height = "400px";
}

// leva ao topo do site

document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  // Mostra o botão quando o usuário rolar a página para baixo
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Comportamento de rolagem suave ao clicar no botão
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
