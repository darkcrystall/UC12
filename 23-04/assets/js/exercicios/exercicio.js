// Exercício 1
const input = document.querySelector('input');
const label = document.querySelector('.label');
// Exemplos
const link = document.getElementById("link");
const img = document.getElementById("imagem");
const btnTrocar = document.getElementById("btn-trocar");
// Exercício 2
const IMG_SPACE = "https://i.pinimg.com/originals/6d/c4/eb/6dc4eb38469aa04d65a9db0a2916b448.jpg";
const IMG_GALAXY = "https://th.bing.com/th/id/OIP.DQrTYjDXhuHWAuYPfdFazAHaEo?w=292&h=182&c=7&r=0&o=7&pid=1.7&rm=3";
const btnAlternar = document.getElementById("btn-alternar");
// Exercício 1
input.addEventListener('input', (event) => {
    // textContent altera apena texto
    // title.textContent = `Nome: ${event.target.value}`;
    // Exemplo: 
    // innerHTML altera texto e permite usar tags, estilos, etc
    label.innerHTML = `Nome: <span style = "color: red;">${event.target.value}</span>`;
});
// Exemplos
// Trocando atributos
link.setAttribute("href", "youtube.com")
// Pegando atributos
console.log(link.getAttribute("href"));
console.log(link.getAttribute("id"));
// Trocando a imagem com um clique
btnTrocar.addEventListener("click", () => {
    img.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.DQrTYjDXhuHWAuYPfdFazAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3");
    img.setAttribute("alt", "Imagem de uma galáxia")
});
// Exercício 2
btnAlternar.addEventListener("click", () => {
    let imgAtributo = img.getAttribute("src");
    switch (imgAtributo) {
        case IMG_SPACE:
            img.setAttribute(IMG_GALAXY);
            break;
        default:
            img.setAttribute(IMG_GALAXY);
            break;
    }
});