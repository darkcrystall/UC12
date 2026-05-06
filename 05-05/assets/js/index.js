const div = document.getElementById("container");
const btn = document.getElementById("btn");
// Criar novos elementos e fazê-los aparecer no HTML
const novo = document.createElement("p");
novo.textContent = "Texto criado";
// Depois de criado o elemento, precisamos dizer onde ele será posicionado
div.appendChild(novo);