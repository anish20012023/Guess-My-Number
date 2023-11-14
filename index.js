let guess = document.querySelector(".guess")
let number = document.querySelector(".number")
let randomNumber = Math.floor(Math.random() * 20);
let check = document.querySelector(".check")
let message = document.querySelector(".message")
let again = document.querySelector(".again");
let score = document.querySelector(".score");

let highscore = 0;
let highScoreVal = document.querySelector(".highscore");
highScoreVal.textContent = highscore;
let maxScore = 20;
console.log(randomNumber)
check.addEventListener('click', () => {

    if (randomNumber > guess.value) {
        message.textContent = "📉Too Low"
        maxScore--;
        score.textContent = maxScore
        document.querySelector("body").style.background = "red"
    }
    else if (randomNumber < guess.value) {
        message.textContent = "📈Too High"
        maxScore--;
        score.textContent = maxScore
        document.querySelector("body").style.background = "red"
    }
    else {
        message.textContent = "🏆 You Won"
        document.querySelector("body").style.background = "#60b347";
        number.textContent = randomNumber;
        if (highscore <= maxScore) {
            highscore = maxScore;
            highScoreVal.textContent = highscore
        }

    }



})

// again js

again.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 20);
    message.textContent = "Start guessing...";
    document.querySelector("body").style.background = "#222";
    number.textContent = "?"
    guess.value = "";
    maxScore = 20;
    score.textContent = 20;

})