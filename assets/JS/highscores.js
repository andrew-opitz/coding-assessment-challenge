var showScoreBtn = document.querySelector('#show-scores')
var scoreOutputDiv = document.querySelector('.scores-output')
var scoreFormWrap = document.querySelector('.score-form-wrap')
var scoreShow = document.querySelector('#scores-output')
var scoreForm = document.querySelector('#score-form')
var score = localStorage.getItem('score')

function showScore() {
    scoreShow.innerText = 'Congrats! Your highscore is ' + score
}

function getHighScores() {
    return JSON.parse(localStorage.getItem('highscores')) || []
}

function saveHighScore() {
    var nameInput = document.querySelector('#name-input')
    var name = nameInput.value

    var highscores = getHighScores() 
    
    highscores.push({
        name: name,
        score: score
    })

    localStorage.setItem(JSON.stringify(highscores))
}

function showScoreOutput () {
    scoreFormWrap.classList.add('hide')
    scoreOutputDiv.classList.remove('hide')

    var highscores = getHighScores()

    if (!highscores.length) {
        scoreOutputDiv.innerHTML = '<p>No saved scores</p>'
    }

    highscores.forEach(function(scoreObj) {
        scoreOutputDiv.insertAdjacentHTML('beforeend', `
        <div>
        <h3>Name: ${scoreObj.name}</h3>
        <p>Score: ${scoreObj.score}</p>
        </div>
        
        `)
    })
}

showScore()
showScoreBtn.addEventListener('click', showScoreOutput)
scoreForm.addEventListener('submit', saveHighScore)