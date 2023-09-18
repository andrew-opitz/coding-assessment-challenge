var timeEl = document.querySelector('#timer')
var startBtn = document.querySelector('#start')
var questionBox = document.querySelector('.question-box')
var questionTextEl = document.querySelector('.question-box h2')
var choicesDiv = document.querySelector('.choices')
var choiceAlert = document.querySelector('.choice-alert')
var questionIndex = 0
var time = 60
var question
var timer

function showQuestion() {
    question = questions[questionIndex]
    console.log(question.text)
    questionTextEl.innerText = question.text

    choicesDiv.innerHTML = ''

    question.choices.forEach(function (choice) {
        choicesDiv.insertAdjacentHTML('beforeend', '<button>' + choice + '</button>')
    })
}

function showHighScores() {
// clear timer interval

localStorage.setItem('score', time)
window.location = './highscores.html'
}

function checkAnswer () {
    
        
        var buttonText = event.target.innerText
        
        var isRight = buttonText === question.answer

        if (isRight) {
            choiceAlert.innerText = 'Correct!'
        } else {
            choiceAlert.innerText = "Wrong!"
            time -= 5
        }

        choiceAlert.classList.remove('hide')

        setTimeout(function () {
            choiceAlert.classList.add('hide')

            questionIndex++

            if (questionIndex === questions.length) {
                return showHighScores ()
            }

            showQuestion()
        }, 1000)
    

}

function startGame (){
    questionBox.classList.remove('hide')
    timeEl.classList.remove('hide')
    startBtn.classList.add('hide')

    // startTimer()

    showQuestion()
}

startBtn.addEventListener('click', startGame)
choicesDiv.addEventListener('click', checkAnswer)