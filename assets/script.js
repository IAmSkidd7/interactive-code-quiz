var questions = [
    {
        question: "When was Javascript introduced?",
        choices: ["1999", "1997", "1996", "1995"],
        correct: "1995",
    }, 
    {
        question: "When was Python introduced?",
        choices: ["1990's", "1980's", "2000's", "2010's"],
        correct: "1980's",
    },
    {
        question: "When was HTML introduced?",
        choices: ["1999", "1993", "1997", "1990"],
        correct: "1990",
    },
    {
        question: "When was CSS introduced?",
        choices: ["1994", "1997", "1996", "1995"],
        correct: "1994",
    },
    {
        question: "When was Ruby introduced?",
        choices: ["1999", "1997", "1996", "1995"],
        correct: "1996",
    }
]
var timerEl = document.getElementById('timer');
var seconds = 45

var rightOrWrong = document.querySelector('#right-or-wrong');


var currentQuestion = 0;
function displayquestion() {
    var question = questions[currentQuestion].question
    document.getElementById('questionEl').textContent = question
}
timerEl.textContent = seconds;
var timer = setInterval(function(){
    document.getElementById('timer').textContent = seconds;
    seconds--;
    if (seconds <= 0) {
        StopTimer();
    }
},1000);

function StopTimer(){
  clearInterval(timer);
}

function displayanswers() {
    var choices = questions[currentQuestion].choices
    for (let index = 0; index < choices.length; index++) {
        var button = document.createElement('button');
        const choice = choices[index];
        button.textContent = choice
        document.getElementById('buttonEl').appendChild(button)
        button.onclick = function(){
            checkAnswers(choice);

          };
    }
}
function checkAnswers(playeranswer) {
    var answer = questions[currentQuestion].correct
    if (answer === playeranswer){
        // rightOrWrong.textContent = "Correct!";
        // document.getElementById('right-or-wrong').appendChild(rightOrWrong)
    }else {
        seconds -=10;
        // rightOrWrong.textContent = "Wrong!";
    }
    currentQuestion++;
    // TODO: remove buttons and answers
    var answerButtons = document.getElementById('buttonEl')
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
        
        
    if (currentQuestion < questions.length) {
        displayquestion();
        displayanswers();  
    }else {
        
    }
}
 


displayquestion();
displayanswers();
