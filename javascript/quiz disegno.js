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
    question: 'Quale di queste rappresentazioni è utilizzata nel disegno tecnico per mostrare oggetti a tre dimensioni?',
    answers: [
      { text: 'Proiezione Ortogonale', correct: false },
      { text: 'Proiezione Assiale', correct: false },
      { text: 'Prospettiva', correct: false },
      { text: 'Isometrica', correct: true }
    ]
  },
  {
    question: 'Quale è l\'unità di misura più comune utilizzata nel disegno tecnico?',
    answers: [
      { text: 'Centimetri', correct: false },
      { text: 'Metri', correct: false },
      { text: 'Pollici', correct: true },
      { text: 'Piedi', correct: false }
    ]
  },
  {
    question: 'Qual è lo strumento principale utilizzato nel disegno tecnico per tracciare linee rette?',
    answers: [
      { text: 'Compasso', correct: false },
      { text: 'Righello', correct: true },
      { text: 'Goniometro', correct: false },
      { text: 'Livella', correct: false }
    ]
  },
  {
    question: 'Quali di questi tipi di linee vengono utilizzati nel disegno tecnico per rappresentare le linee nascoste di un oggetto?',
    answers: [
      { text: 'Linee Sottili', correct: false },
      { text: 'Linee Spesse', correct: false },
      { text: 'Linee Tratteggiate', correct: true },
      { text: 'Linee A ZigZag', correct: false }
    ]
  },
  {
    question: 'Qual è il nome dello strumento utilizzato nel disegno tecnico per creare angoli precisi?',
    answers: [
      { text: 'Compasso', correct: false },
      { text: 'Goniometro', correct: true },
      { text: 'Livella', correct: false },
      { text: 'Squadra', correct: false }
    ]
  },
  {
    question: 'Quali di queste rappresentazioni sono utilizzate nel disegno tecnico per mostrare un oggetto da più angolazioni?',
    answers: [
      { text: 'Proiezione Ortogonale', correct: true },
      { text: 'Proiezione Assiale', correct: false },
      { text: 'Prospettiva', correct: false },
      { text: 'Vista A Sezione', correct: false }
    ]
  },
  {
    question: 'Qual è il termine utilizzato nel disegno tecnico per indicare la lunghezza di un segmento di linea?',
    answers: [
      { text: 'Punto', correct: false },
      { text: 'Angolo', correct: false },
      { text: 'Dimensione', correct: true },
      { text: 'Coordinata', correct: false }
    ]
  },
  {
    question: 'Quali di questi strumenti sono utilizzati nel disegno tecnico per creare curve precise?',
    answers: [
      { text: 'Compasso E Righello', correct: true },
      { text: 'Goniometro E Squadra', correct: false },
      { text: 'Pantografo E Livella', correct: false },
      { text: 'Curvilineo E Calibro', correct: false }
    ]
  }
]