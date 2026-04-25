// Lista com todas imagens
const images = document.querySelectorAll(".image");
// Lista com todos botões
const buttons = document.querySelectorAll(".btn-action");
/*
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
// btnGalaxy.addEventListener("click", () => {
//   imgGalaxy.classList.toggle("active");
//   btnGalaxy.textContent == "Mostrar imagem"
//     ? (btnGalaxy.textContent = "Esconder imagem")
//     : (btnGalaxy.textContent = "Mostrar imagem");
// });
// // Segundo botão
// btnPlanets.addEventListener("click", () => {
//   imgPlanets.classList.toggle("active");
//   btnPlanets.textContent == "Mostrar imagem"
//     ? (btnPlanets.textContent = "Esconder imagem")
//     : (btnPlanets.textContent = "Mostrar imagem");
// });
// // Terceiro botão
// btnSpace.addEventListener("click", () => {
//   imgSpace.classList.toggle("active");
//   btnSpace.textContent == "Mostrar imagem"
//     ? (btnSpace.textContent = "Esconder imagem")
//     : (btnSpace.textContent = "Mostrar imagem");
// });
*/
// Exemplo do professor para tornar mais fácil (usando forEach)
/*
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const image = images[index];
    image.classList.toggle("active");
    // Aqui ele havia usado if else, mas não faz diferença
    button.textContent =
      button.textContent == "Mostrar imagem"
        ? "Esconder imagem"
        : "Mostrar imagem";
  });
});
*/
// Corrigido essa ideia (mais complexo, mas facilita e funciona da mesma forma)
for (let btnIndex = 0; btnIndex < buttons.length; btnIndex++) {
  for (let imgIndex = 0; imgIndex < images.length; imgIndex++) {
    buttons[btnIndex].addEventListener("click", () => {
      if (btnIndex === imgIndex) {
        images[imgIndex].classList.toggle("active");
        buttons[btnIndex].textContent == "Mostrar imagem"
          ? (buttons[btnIndex].textContent = "Esconder imagem")
          : (buttons[btnIndex].textContent = "Mostrar imagem");
      }
    });
  }
}