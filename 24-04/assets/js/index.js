// Pega o elemento "h3" por tag
const title = document.querySelector("h3");
// Pega o elemento "button" por tag
const btn = document.querySelector("button");
// Adiciona um evento ao botão
btn.addEventListener("click", () => {
    // Quando clicarmos no botão, a função irá adicionar uma classe ao título
    // title.classList.add("green");
    // Podemos remover uma classe usando "classList.remove"
    // title.classList.remove("green");
    // Para alternar entre adicionar e remover uma classe, usamos "classList.toggle"
    title.classList.toggle("green");
});