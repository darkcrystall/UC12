// Pegar cada elemento que vamos usar
// Entre no documento HTML, e pegue o elemento que tem o id "titulo" e o id "btn"
const titulo = document.getElementById('titulo');
const botao = document.getElementById('btn');

function trocaCor() {
    titulo.style.color = "red";
}

function mensagem() {
    alert("Mensagem");
}

function trocaMensagem() {
    titulo.textContent = "Texto trocado";
}

// Adiciona um evento ao botão
// Um evento é uma ação do usuário
// "addEventListener" precisa de dois argumentos: o primeiro é uma ação, que dispara uma função; o segundo é qual função deve ser disparada.
botao.addEventListener('click', trocaMensagem);