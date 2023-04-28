var questions = [
    {
        question: "What is JavaScript?",
        choices: [
            "Is a scripting language used to make the website interactive",
            "Is an assembly language used to make the website interactive",
            "Is a compiled language used to make the website interactive",
            "None of the mentioned"
        ],
        answer: "Is a scripting language used to make the website interactive"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: [
            "var",
            "let",
            "var and let",
            "None of the mentioned"
        ],
        answer: "var and let"
    },
    {
        question: "When an operators value is NULL, the typeof returned by the unary operator is:",
        choices: [
            "Boolean",
            "Undefined",
            "Object",
            "Integer"
        ],
        answer: "Object"
    },
    {
        question: "How do we write a comment in javascript?",
        choices: [
            "/* */",
            "//",
            "#",
            "$ $"
        ],
        answer: "//"
    }
];

var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];
var choicesList = document.getElementById("choices");

var startButton = document.getElementById("start-button");
var quizGameTitle = document.getElementById("quiz-game-title");
var quizGameParagraph = document.getElementById("quiz-game-paragraph");
var timerEl = document.getElementById('time');
let timer = 60;
timerEl.textContent = "Timer: " + timer
var interval;

function countDown() {
    interval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(interval)
            timer = 0;
            timerEl.textContent = "Timer: " + timer
            currentQuestionIndex = 999
            checkGame()
        }
        timer--
        timerEl.textContent = "Timer: " + timer
    }, 1000)
}

startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    quizGameTitle.style.display = "none";
    quizGameParagraph.style.display = "none";
    document.getElementById("question-container").style.display = "block";
    countDown()
    displayQuestion();
});

function displayQuestion() {
    document.getElementById("message").textContent = ''
    document.getElementById("question").textContent = currentQuestion.question;
    choicesList.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = document.createElement("li");
        choice.textContent = currentQuestion.choices[i];
        choice.setAttribute("style", "background-color: #F08080; margin: 20px; padding: 10px");
        choice.addEventListener("click", checkAnswer);
        choicesList.appendChild(choice);
    }
}

function checkAnswer(event) {
    var chosenAnswer = event.target.textContent;
    if (chosenAnswer === currentQuestion.answer) {
        document.getElementById("message").textContent = "Correct! The answer is " + currentQuestion.answer;
    } else {
        timer = timer - 10
        document.getElementById("message").textContent = "Wrong! The correct answer is " + currentQuestion.answer;
    }
    setTimeout(() => {
        checkGame();
    }, 1500);
}

function checkGame() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        currentQuestion = questions[currentQuestionIndex];
        displayQuestion();
    } else {
        document.getElementById("question-container").style.display = "none";
        document.getElementById("enter-initials").style.display = "";
        document.getElementById("message").style.display = "none";
        document.getElementById("score").textContent = timer;
        clearInterval(interval);
    }
}

// var buttonInitials = document.querySelector("#button-initials");
// var initials = document.querySelector("#initials");

// initials.innerHTML = localStorage.getItem("value");

// buttonInitials.addEventListener("keyup", display);

// function display(){
//    localStorage.setItem('value', input.value); 
//    initials.innerHTML = localStorage.getItem("value");  
// }