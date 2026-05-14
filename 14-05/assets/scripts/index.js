// seleciona TODOS os elementos que possuem a classe "box"
// o resultado vira uma lista de elementos
const boxes = document.querySelectorAll(".observer");
// cria um observador de interseção
// ele serve para "vigiar" elementos da página
// e detectar quando eles aparecem na tela
/*
No IntersectionObserver, a função recebe automaticamente 2 parâmetros:
Eles são enviados pelo próprio navegador quando o observador detecta mudanças.
entries é uma lista com informações dos elementos observados.

Cada item dessa lista representa um elemento que mudou de estado na tela.
O objeto entry possui várias informações úteis:

entry.isIntersecting

Verifica se o elemento apareceu na tela.

entry.target

Representa o elemento HTML observado.

observer é o próprio observador criado pelo: const observer = new IntersectionObserver(...)

Isso permite controlar o observador dentro da função.

*/ const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // adiciona classe para tornar vísivel
      entry.target.classList.add("visible");
      // para observar apenas uma vez
      observer.unobserve(entry.target);
    }
  });
});
// para cada caixa, aplique o observer
boxes.forEach((box) => {
  observer.observe(box);
});
