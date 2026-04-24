// Guarda qual pergunta está ativa (começa na posição 0 do array)
let currentQuestionIndex = 0;
// Pega todas as perguntas do HTML
/* 
    document.getElementById -> pega apenas UM elemento
    document.querySelectorAll -> pega TODOS os elementos de uma classe e retorna uma lista (tipo array)
*/
const questions = document.querySelectorAll(".quiz-question");
// Pega o elemento que irá receber a pontuação
const pontuacao = document.querySelector(".score");
// Pega onde irá a informação de quantas questões tem
const questionInfo = document.querySelector(".questions-info");
// Pega a divisória onde está as informações da pontuação
const scoreInfo = document.querySelector(".score-info");
// Insere o total de perguntas para o usuário visualizar
questionInfo.textContent = `${questions.length}`;
// Função para ativar a próxima pergunta
function activateQuestion() {
    // Caso chega na última pergunta, irá mostrar uma mensagem que terminou o quiz
    if (currentQuestionIndex === questions.length) {
      scoreInfo.innerHTML = `<b>Quiz finalizado! Acertou: ${currentQuestionIndex} de ${questions.length}</b>`;
    } 
    /*
        questions[currentQuestionIndex] -> acessa a pergunta atual dentro da lista
        classList.add('active') -> adiciona a classe 'active' na pergunta atual
        Essa classe faz a pergunta aparecer na tela (via CSS)
    */
  questions[currentQuestionIndex].classList.add("active");
}
// Função chamada quando se clica em uma resposta
function answer(isCorrect) {
  // Se a resposta estiver correta
  if (isCorrect) {
    /*
        classList.remove('active') -> remove a classe
        Isso faz a pergunta atual sumir da tela 
    */
    questions[currentQuestionIndex].classList.remove("active");
    /* 
        Avança para a próxima pergunta
        currentQuestionIndex + 1 -> vai para a próxima posição do array
    */
    currentQuestionIndex = currentQuestionIndex + 1;
    // Ativa (mostra) a próxima pergunta
    activateQuestion();
    // Caso acerte, atualiza a pontuação
    pontuacao.textContent = `Acertou: ${currentQuestionIndex}`;
  } else {
    // Se a resposta estiver errada
    console.log("Respota errada");
  }
}
// Seleciona todos os botões de resposta
const buttons = document.querySelectorAll(".quiz-option");
/*
    Percorre todos os botões
    buttons.length -> quantidade de botões
*/
for (let i = 0; i < buttons.length; i++) {
    /*
        addEventListener -> adiciona um evento ao botão
        'click' -> evento de clique, quando se clica no botão 
    */
  buttons[i].addEventListener("click", () => {
        /*
            classList.contains('.contains') -> verifica se o botão tem a classe 'correct'
            Se tiver -> retorna true (resposta correta)
            Se não tiver -> retorna false (resposta incorreta)
        */
    const isCorrect = buttons[i].classList.contains("correct");
    // Chama a função principal passando true ou false
    answer(isCorrect);
  });
}