// Declaração de variáveis, selecionando os elementos
// Botões
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
// Caixas
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
// Formulário
const form = document.querySelector("form");
// Input
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const mostrarInput = document.getElementById("mostrar-input");
// Eventos de clique
// CLique único
btn1.addEventListener("click", () => {
  console.log("Clique detectado");
});
// Clique duplo
btn2.addEventListener("dblclick", () => {
  console.log("Duplo clique");
});
// Eventos de mouse
// Quando o mouse entra no elemento
box1.addEventListener("mouseenter", () => {
  console.log("Mouse entrou no elemento");
});
// Quando o mouse sai do elemento
box2.addEventListener("mouseleave", () => {
  console.log("Mouse saiu do elemento");
});
// Rastreia qualquer movimento do mouse
box3.addEventListener("mousemove", (event) => {
  console.log(`X: ${event.clientX} Y: ${event.clientY}`);
});
// Eventos de teclado
// Quando a tecla é pressionada
document.addEventListener("keydown", (event) => {
  console.log("Tecla:", event.key);
});
// Quando a tecla é solta
document.addEventListener("keyup", (event) => {
  console.log("Soltou:", event.key);
});
// Envio de formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form enviado");
});
// Digitação em tempo real
input1.addEventListener("input", (event) => {
  mostrarInput.innerHTML = `<p>Valor: ${event.target.value}</p>`;
});
// Quando o valor muda e perde foco
input2.addEventListener("change", (event) => {
  console.log("Mudou:", event.target.value);
});
// Quando entra no campo
input3.addEventListener("focus", () => {
  console.log("Campo ativo");
});
// Quando sai do campo
input4.addEventListener("blur", () => {
  console.log("Saiu do campo");
});
// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("HTML carregado");
});
// load
window.addEventListener("load", () => {
  console.log("Tudo carregado (imagens, etc)");
});