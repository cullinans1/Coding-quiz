var startButtonEl = document.getElementById("start-task");
var questionsEl = document.getElementById("questions=list-wrapper");
var countDownEl = document.getElementById("countdown");
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var currentIndex = 0;
var choices = document.getElementById("choices");
var buttonEl = document.querySelector(".btn");
var scoreEl = document.getElementById("score");
var setUserInitals = document.getElementById("set-user-score");
var finalScoreEl = document.getElementById("final-score");
var submitBtn = document.getElementById("submit");
var formControlEl = document.getElementById("initalsEntry");
var viewScoresEl = document.getElementById("view-scores")
var score = 0;
//array for questions
var questionBank = [
    {
        question: "What is the correct syntax for creating a paragraph in HTML?",
        options: ["<body></body>", "<p></p>", "(paragraph)", "<section></section>"],
        answer: "<p></p>"
    },
    {
        question: "When using an alert, what is the proper way to type it?",
        options: ["console.log(alert:...)", "window.alert('...')", "alertThis'...'", "You mean alarm?"],
        answer: "window.alert('...')"
    },
    {
        question: "Javascript Functions are open and closed with what tags?",
        options: ["{ }", "[ ]", '" "', "( )"],
        answer: "{ }"
    },
    {
        question: "In CSS what is the best way to style this specific tag in a div: <p class = 'paragraph' id= 'content'>",
        options: [".p {...}", ".div p{...}", ".paragraph {...}", "#content{...}"],
        answer: "#content{...}"
    },
    {
        question: "What is an array in javascript?",
        options: ["An object that allows storage of multiple values in a single variable", "An ordered series or arrangement", "An impressive display or range of a particular type of thing", "A unique function that arranges things by whatever order specified"],
        answer: "An object that allows storage of multiple values in a single variable"
    },
    {
        question: "What is important when writing new code?",
        options: ["Save often", "Use google if you aren't sure", "Test the code often", "All of these"],
        answer: "All of these"
    }
];

//creating the timer for when the quiz starts
function quizTimer() {
    //time for quiz
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
    countDownEl.textContent = "Time left: " + timeLeft;
    if(timeLeft === 0 ) {
        countDownEl.textContent = "Times up!";
        alert("The quiz is over! Lets see how you did.")
        clearInterval(timeInterval);
        endGame();
    }
    else if (currentIndex === 6) {
        clearInterval(timeInterval);
    }
    timeLeft--;
    }, 1000);
}
function startQuiz() {
    //start quiz timer
    quizTimer();
    //hide current screen and start button
    startScreenEl.setAttribute("class", "hidden");
    //get questions
    getQuestions();
}
var getQuestions = function() {
    //call the questions from the question bank
    var newQuestion = questionBank[currentIndex];
    questionsEl.removeAttribute("class");
    //display question with this text content
    var questionTitle = document.getElementById("heading");
    questionTitle.textContent = newQuestion.question;
    //clear previous question choices
    choices.innerHTML = "";
    //display choices and buttons
    newQuestion.options.forEach(function(choice, i) {
        var choiceBtns = document.createElement("button");
        choiceBtns.setAttribute("class", "btn btn-secondary choices");
        choiceBtns.setAttribute("value", choice);
        choiceBtns.textContent = choice;
        choiceBtns.onclick = buttonClicked;
        choices.appendChild(choiceBtns);
    });
   
};
function buttonClicked() {
    if(this.value !== questionBank[currentIndex].answer) {
    alert("That's wrong! -5 points");
    score -= 5;
    scoreEl.textContent ="Current Score: " + score;
    } else {
    alert("That's right! +5 points");
    score += 5;
    scoreEl.textContent ="Current Score: " + score;
    }
    currentIndex++;
    if (currentIndex === questionBank.length) {
        alert("Quiz complete! Your score for the game was: " + score);
        endGame();
    } else {
        getQuestions();
    }
    score === score;
};
function endGame () {
    questionsEl.setAttribute("class", "hidden");
    setUserInitals.removeAttribute("class");
    setUserInitals.setAttribute("class", "score-screen")
    finalScoreEl.textContent = "Final Score: " + score;
    submitBtn.onclick= saveScores;
};
function saveScores () {
    var userInitals = formControlEl.value.trim();
    var userScores = JSON.parse(window.localStorage.getItem("userScores")) || [];

    var newScore = {
        score: score,
        initals: userInitals
    };
    userScores.push(newScore);
    window.localStorage.setItem("userScores", JSON.stringify(userScores));

    setUserInitals.setAttribute("class", "hidden");
    viewScoresEl.removeAttribute("class");
    window.localStorage.getItem("userScores");
    JSON.parse(window.localStorage.getItem("userScores"));

}
startButtonEl.onclick = startQuiz;
