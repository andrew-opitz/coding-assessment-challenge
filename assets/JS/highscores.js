var showScoresBtn = document.querySelector('#show-scores')
var scoreOutputDiv = document.querySelector('.scores-output')
var scoreFormWrap = document.querySelector('.score-form-wrap')
var sOutput = document.querySelector('#score-output')
var scoreForm = document.querySelector('#score-form')
var namePlace = document.querySelector('#name-place')
var score = localStorage.getItem('score')

function getHighscores () {
    return JSON.parse(localStorage.getItem('highscores')) || []
}

function saveHighscore() {
    var namePlace = document.querySelector('#name-place')
    var name = namePlace.value

    var highscores = getHighscores()

    highscores.push({
        name: name,
        score: score
    })
    localStorage.setItem('highscores', JSON.stringify(highscores))
}

function showScoreOutput() {
    if (scoreOutputDiv.classList.contains('hide')) {
        scoreFormWrap.classList.add('hide');
        scoreOutputDiv.classList.remove('hide');

    var highscores = getHighscores()
    scoreOutputDiv.innerHTML = '';

    if (!highscores.length) {
        scoreOutputDiv.innerHTML = '<p>No saved scores</p>';
    } else {
        highscores.forEach(function(scoreObj) {
            scoreOutputDiv.insertAdjacentHTML('beforeend', `
                <div>
                    <h3>Name: ${scoreObj.name}</h3>
                    <p>Score: ${scoreObj.score}</p>
                </div>
            `);
        });
    }
    showScoresBtn.innerHTML = 'Show Highscore Form'; 
    } else {
        
        scoreFormWrap.classList.remove('hide');
        scoreOutputDiv.classList.add('hide');
        
        
        showScoresBtn.innerHTML = 'Show Highscores';
    }
}

function showScore() {
    var score = localStorage.getItem('score')
    
    sOutput.innerText = 'Your highscore is ' + score
}

showScore()
showScoresBtn.addEventListener('click', showScoreOutput)
scoreForm.addEventListener('submit', saveHighscore) 