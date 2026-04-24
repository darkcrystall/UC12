/*
// Testar essa ideia depois 
const images = document.querySelectorAll(".image")
const buttons = document.querySelectorAll(".btn-action");
*/
// Elementos da primeira imagem
const btnGalaxy = document.getElementById("btn-galaxy");
const imgGalaxy = document.getElementById("image-galaxy");
// Elementos da segunda imagem
const btnPlanets = document.getElementById("btn-planets");
const imgPlanets = document.getElementById("image-planets");
// Elementos da terceira imagem
const btnSpace = document.getElementById("btn-space");
const imgSpace = document.getElementById("image-space");
// Primeiro botão
btnGalaxy.addEventListener("click", () => {
  imgGalaxy.classList.toggle("active");
  btnGalaxy.textContent == "Mostrar imagem"
    ? (btnGalaxy.textContent = "Esconder imagem")
    : (btnGalaxy.textContent = "Mostrar imagem");
});
// Segundo botão
btnPlanets.addEventListener("click", () => {
  imgPlanets.classList.toggle("active");
  btnPlanets.textContent == "Mostrar imagem"
    ? (btnPlanets.textContent = "Esconder imagem")
    : (btnPlanets.textContent = "Mostrar imagem");
});
// Terceiro botão
btnSpace.addEventListener("click", () => {
  imgSpace.classList.toggle("active");
  btnSpace.textContent == "Mostrar imagem"
    ? (btnSpace.textContent = "Esconder imagem")
    : (btnSpace.textContent = "Mostrar imagem");
});
/* 
// Testar essa ideia depois
for (let i = 0; i < buttons.length; i++) {
  for (let i = 0; i < images.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (buttons[i] === images[i]) {
        images[i].classList.toggle("active");
        buttons[i].textContent == "Mostrar imagem"
          ? (buttons[i].textContent = "Esconder imagem")
          : (buttons[i].textContent = "Mostrar imagem");
      }
    });
  }
}
*/