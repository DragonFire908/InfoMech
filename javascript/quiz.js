const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions;
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Qual è il significato dell\'acronimo "HTML"?',
    answers: [
      { text: 'Hyper Transfer Markup Language', correct: false },
      { text: 'Hypertext Markup Language', correct: true },
      { text: 'Hyper Text Managemente Language', correct: false },
      { text: 'Hyper Transfer Management Language', correct: false }
    ]
  },
  {
    question: 'Qual\'è il linguaggio di programmazione utilizzato per lo sviluppo di applicazioni iOS?',
    answers: [
      { text: 'C#', correct: false },
      { text: 'Swift', correct: true },
      { text: 'Java', correct: false },
      { text: 'Objective-C', correct: false }
    ]
  },
  {
    question: 'Quali sono i tre principali tipi di dati in programmazione?',
    answers: [
      { text: 'Intero, decimale, string', correct: false },
      { text: 'Intero, booleano, carattere', correct: true },
      { text: 'Stringa, booleano, carattere', correct: false },
      { text: 'Intero, float, carattere', correct: false }
    ]
  },
  {
    question: 'Qual\'è sistema operativo è più utilizzato al mondo?',
    answers: [
      { text: 'MacOS', correct: false },
      { text: 'Linux', correct: false },
      { text: 'Windows', correct: true },
      { text: 'Android', correct: false }
    ]
  },
  {
    question: 'Qual\'è il metodo più comune per rappresentare i colori sui computer?',
    answers: [
      { text: 'RGB', correct: true },
      { text: 'CMYK', correct: false },
      { text: 'HEX', correct: false },
      { text: 'HSL', correct: false }
    ]
  },
  {
    question: 'In quale linguaggio di programmazione troviamo la funzione "printf("");"',
    answers: [
      { text: 'Java', correct: false },
      { text: 'C', correct: true },
      { text: 'Python', correct: false },
      { text: 'HTML', correct: false }
    ]
  },
  {
    question: 'Quali sono i primi 4 linguaggio più richiesti al mondo oggi? (2023)',
    answers: [
      { text: 'Python, Java, JavaScript, C++', correct: true },
      { text: 'Assembly, C, Fortran, Pascal', correct: false },
      { text: 'Java, Python, HTML, Perl', correct: false },
      { text: 'C#, C, C++, WorldPress', correct: false }
    ]
  },
  {
    question: 'I linguaggi di programmazione che si usano oggi sono linguaggi... (Tipo: C++, Java, Python, C#)',
    answers: [
      { text: 'Di Alto Livello', correct: true },
      { text: 'Di Basso LIvello', correct: false }
    ]
  },
  {
    question: 'Quali linguaggi più usati ad oggi per creare un sito web?',
    answers: [
      { text: 'HTML, CSS, JavaScript, PHP, MySQL', correct: true },
      { text: 'Nodejs, Java, Python, Ruby', correct: false },
      { text: 'C, Angular, PHP, HTML', correct: false },
      { text: 'HTML, CSS, TypeScript, Angular', correct: false }
    ]
  }
]