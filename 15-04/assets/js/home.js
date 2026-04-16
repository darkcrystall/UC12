// Atribuir variáveis para os elementos
// "Entramos" no documento HTML, e "procuramos" o elemento pelo seu id. 
const titulo = document.getElementById("titulo");
const botao = document.getElementById("btn");
// Troca cor de um elemento
function trocaCor() {
  titulo.style.color = "red";
}
// Imprime um aviso
function mensagem() {
  alert("Mensagem");
}
// Alterna os conteúdos do texto a cada clique
function trocaMensagem() {
  texto = titulo.textContent;
  switch (texto) {
    case "Texto":
      titulo.textContent = "Texto trocado!";
      break;
    default:
      titulo.textContent = "Texto";
      break;
  }
}
// Adiciona um evento ao botão
// Um evento é uma ação do usuário
// "addEventListener" precisa de dois argumentos: o primeiro é uma ação, que dispara uma função; o segundo é qual função deve ser disparada.
botao.addEventListener('click', trocaMensagem);