function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}

// Quiz Prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

// Quiz guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question('Where did the very traces of renaissance occur?',['France','England','Italy','Spain'],'Italy');

var q2 = new Question('What does the word "renaissance" mean?',['To start over','A rebirth','A development','Liberal Art'],'A rebirth');

var q3 = new Question('Who was the ruler of Florence during renaissance?',["Lorenzo de'Medici",'Leonardo Da Vinci',"Cosimo de'Medici",'Sandro Botticelli'],"Lorenzo de'Medici");

var q4 = new Question('What is Leonardo Da Vinci known for?',['Architecture','Literature','Musician','Art'],'Art');

var q5 = new Question('What is Dante Alighieri known for?',['Literature','Astronomy','Medicine','Music'],'Literature');

var questions = [q1,q2,q3,q4,q5];


// Start Quiz

var quiz = new Quiz(questions);

loadQuestion();


function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{

        var question = quiz.getQuestion();
        var choices = question.choices;
        
        document.querySelector('#question').textContent = question.text;
        for(var i=0; i<choices.length;i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];
            guess('btn'+i,choices[i]);
        }
        showProgress();
    }
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion()
    }
}

function showScore(){
   var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
   document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex+1;
    var html = 'Question '+ questionNumber + ' of ' + totalQuestion;

    if(totalQuestion === questionNumber){
        document.querySelector('#progress').innerHTML = "Quiz is Ended";
    }else{
        document.querySelector('#progress').innerHTML = html;
    }
}
