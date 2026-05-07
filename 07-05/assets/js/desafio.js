const div = document.getElementById("main-container");
const btnCreate = document.getElementById("btn-create");
// Cria um índice global que o evento de clique irá incrementar
let indice = 0;
// Cria uma variável que rastreia o número de itens
let numeroItens = 0;
// Adiciona um evento de clique no botão de criar. Ao clicar, ele cria uma divisória, que já vem com o evento de clique que a remove.
btnCreate.addEventListener("click", () => {
  if (numeroItens == 0) {
    indice = numeroItens;
  }
  const box = document.createElement("div");
  box.classList.add("box");
  let numeroIndice = document.createElement("span");
  numeroIndice.textContent = `${indice}`;
  box.appendChild(numeroIndice);
  indice++;
  numeroItens++;
  div.appendChild(box);
  box.addEventListener("click", () => {
    box.remove();
    numeroItens--;
  });
});