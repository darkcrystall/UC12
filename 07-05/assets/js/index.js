const div = document.querySelector("div");
const btnCreate = document.querySelector("#btn-create");
const btnRemove = document.querySelector("#btn-remove");
// Adiciona evento de clique no botão de criar elemento
btnCreate.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("container");
  div.appendChild(box);
});
// Adiciona evento de clique no botão de remover elemento
// elemento.children é um array que contém todos os filhos de um elemento
// remove() remove um elemento
btnRemove.addEventListener("click", () => {
  if (div.children.length > 0) {
    div.children[0].remove();
  }
});