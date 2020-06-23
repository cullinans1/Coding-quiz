var startButtonEl = document.getElementById("start-task");
var questionsEl = document.getElementById("questions=list-wrapper");
var mainEl = document.querySelector("main");
var countDownEl = document.getElementById("countdown");
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var currentIndex = 0;
//array for questions
var questionBank = [
    {
        question: "This is a test",
        choices: ["This is also a test", "Testing b", "testing C", "testing d"],
        answer: "testing b"
    }
];

//creating the timer for when the quiz starts
function quizTimer() {
    //time for quiz
    var timeLeft = 75;
    var timeInterval = setInterval(() => {
    countDownEl.textContent = "Time left: " + timeLeft;
    if(timeLeft === 0 ) {
        countDownEl.textContent = "Times up!";
        clearInterval(timeInterval);
        //vewHighScores();
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
    // questionsEl.removeAttribute("class");
    //display question with this text content
    var questionTitle = document.getElementById("heading");
    questionTitle.textContent = newQuestion.question
    //display choices and buttons
    
}
startButtonEl.onclick= startQuiz;