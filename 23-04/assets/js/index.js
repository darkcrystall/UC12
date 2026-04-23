// Declaração de variáveis, selecionando os elementos
// Botões
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
// Caixas
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
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
    console.log(`X: ${event.clientX} \n Y: ${event.clientY}`);
});