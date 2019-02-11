// Here are our function stubs based on the function example provided at the bottom of this js file
const QUESTIONS = [
  {//1
    question: 'What is the capital of the United States?',
    answers: [
      'Washington D.C.',
      'Sacramento',
      'San Francisco',
      'New York'
    ],
    correctAnswer: 'Washington D.C.',
  },
//2
  {
    question: 'What is the capital of Spain?',
    answers: [
      'Barcelona',
      'Granada',
      'Madrid',
      'Seville'
    ],
    correctAnswer: 'Madrid',
  },
//3
  {
    question: 'What is the capital of Argentina?',
    answers: [
      'Rosario',
      'Buenes Aires',
      'Cordoba',
      'Mendoza'
    ],
    correctAnswer: 'Buenes Aires',
  },
//4
  {
    question: 'What is the capital of Australia?',
    answers: [
      'Sydney',
      'Melbourne',
      'Brisbane',
      'Canberra'
    ],
    correctAnswer: 'Canberra',
  },
//5
  {
    question: 'What is the capital of China?',
    answers: [
      'Shanghai',
      'Beijing',
      'Chongqing',
      'Xi\'an'
    ],
    correctAnswer: 'Beijing',
  },
//6
  {
    question: 'What is the capital of UK?',
    answers: [
      'London',
      'Edinburgh',
      'Leeds',
      'Liverpool'
    ],
    correctAnswer: 'London',
  },
//7
  {
    question: 'What is the capital of Iran?',
    answers: [
      'Mashhad',
      'Tabriz',
      'Tehran',
      'Isfahan'
    ],
    correctAnswer: 'Tehran',
  },
//8
  {
    question: 'What is the capital of Brazil?',
    answers: [
      'Rio de Janeiro',
      'San Paulo',
      'Curitiba',
      'Brasília'
    ],
    correctAnswer: 'Brasília',
  },
//9
  {
    question: 'What is the capital of Rwanda?',
    answers: [
      'Nyamata',
      'Ruhengeri',
      'Butare',
      'Kigali'
    ],
    correctAnswer: 'Kigali',
  },
//10
  {
    question: 'What is the capital of Japan?',
    answers: [
      'Osaka',
      'Kyoto',
      'Tokyo',
      'Sapporo'
    ],
    correctAnswer: 'Tokyo',
  }
];

const INDEX = {
  questionIndex: 0
}
const STORE = {
  currentQuestion: {
    question: QUESTIONS[INDEX.questionIndex].question,
    answers: QUESTIONS[INDEX.questionIndex].answers,
    correctAnswer: QUESTIONS[INDEX.questionIndex].correctAnswer,
  },
  score: 0
};

function generateIntroView(){
  return `<div class="quizStart js-quiz-start">
  <h1>Country Quiz</h1>
  <p>Let's test your knowledge on country's capitals!</p>
  <button type="button" name="button" class="startButton">Start Quiz!</button>
</div>`
}

function renderIntroView(){
  $('.js-question-Answer-Form').html(generateIntroView());
}


function startQuizOnClick(){
  $('.js-quiz-start').on('click', '.startButton', function(){
    renderQuestionAnswerText();
  })
}


function updateSTORE(){
  INDEX.questionIndex++;
  if(INDEX.questionIndex < QUESTIONS.length){
    STORE.currentQuestion = QUESTIONS[INDEX.questionIndex];
  }
}
//added icon
function generateQuestion(){
  return `
  <section class="js-answer-template">
  <img src="images/question1.svg" class="icon col-12" alt="icon of the earth">
  <form>
    <fieldset>
      <legend>${STORE.currentQuestion.question}</legend>
  
      <label class="answerOption col-6">
        <input type="radio" name="answer" value="${STORE.currentQuestion.answers[0]}" required>
        <span class= "questionText">${STORE.currentQuestion.answers[0]}</span>
      </label>
      
      <label class="answerOption col-6">
        <input type="radio" name="answer" value="${STORE.currentQuestion.answers[1]}" required>
        <span class= "questionText">${STORE.currentQuestion.answers[1]}</span>
      </label>
      
      <label class="answerOption col-6">
        <input type="radio" name="answer" value="${STORE.currentQuestion.answers[2]}" required>
        <span class= "questionText">${STORE.currentQuestion.answers[2]}</span>
      </label>

      <label class="answerOption col-6">
        <input type="radio" name="answer" value="${STORE.currentQuestion.answers[3]}" required>
        <span class= "questionText">${STORE.currentQuestion.answers[3]}</span>
      </label>

      <button class="questionSubmit" type="submit" name="submit">Submit</button>
    </fieldset>
  </form>
</section>`;
}


function renderQuestionAnswerText(){
  $('.js-question-Answer-Form').html(generateQuestion());
  updateQuestionNumber();
  handleAnswerSubmitted();
}

function updateQuestionNumber(){
  $('.questionNumber').text(INDEX.questionIndex+1);
}

function handleAnswerSubmitted(){
    $('form').on('submit', function(event){
      event.preventDefault();
      let selected = $('input:checked');
      let answer = selected.val();
      if(answer === STORE.currentQuestion.correctAnswer){
        $('.js-question-Answer-Form').html(generateUserFeedbackCorrect());
        STORE.score++;
      }
      else{
        $('.js-question-Answer-Form').html(generateUserFeedbackIncorrect());
      }
      $('.score').text(STORE.score);
      updateSTORE();
      renderNextQuestion();
    })
}

//added icon
function generateUserFeedbackCorrect(){
  return `
  <section class="js-feedback-correct">
    <img src="images/correct1.svg" class="icon" alt="correct">
    <h2>You are right!</h2>
  <button class='js-next-btn' type='submit' name='next-question'>Next question!</button> </section>`;
}

//added icon
function generateUserFeedbackIncorrect(){
  return `<section class='js-feedback-Incorrect'> <h2>You are wrong!</h2>
      <p>The correct answer is ${STORE.currentQuestion.correctAnswer}.</p>
      <button class='js-next-btn' type='submit' name='next-question'>Next question!</button>
    </section>`;
}

function renderNextQuestion(){
  $('.js-question-Answer-Form').on('click', '.js-next-btn', function(event){
    if(INDEX.questionIndex < QUESTIONS.length){
      renderQuestionAnswerText();
    }
    else {
      renderQuizResults();
    }
  })
  
}

//added icon
function generateQuizResultsPass(){
  return `
  <section class="js-quiz-results">
    <img src="images/congrats1.svg" class="icon" alt="congrats">
    <h2>Great job! You know your capitals!</h2>
    <button class='js-restart-btn' type="submit" name="restart-quiz">Restart Quiz</button>
  </section>`;
}

//added icon
function generateQuizResultsFailed(){
  return `
  <section class="js-quiz-results">
    <img src="images/cry3.svg" class="icon" alt="failed teary face">
    <h2>Oh no! You did not get enough answers correct.</h2>
    <p>Study up on your capitals and try again!</p>
    <button class='js-restart-btn' type="submit" name="restart-quiz">Restart Quiz</button>
  </section>`;
}

function renderQuizResults(){
  if (STORE.score/QUESTIONS.length >= 0.7) {
    $('.js-question-Answer-Form').html(generateQuizResultsPass());
  }
  else {
    $('.js-question-Answer-Form').html(generateQuizResultsFailed());
  }
  console.log(STORE.score/QUESTIONS.length);
  restartQuiz();
}

function restartQuiz(){
  $('main').on('click', '.js-restart-btn', function (event) {
    location.reload();
  });
}

function creatQuiz(){
  renderIntroView();
  startQuizOnClick();
}

$(creatQuiz);













// // In-memory database of questions
// const QUESTIONS = [];

// // Create your initial store
// const STORE = {
//     // Current question
//     // User's answer choice(s)
//     // Current view
//     // Score? Anything else?
// };

// // Template generators
// function generateAnswerList(answers) {}

// // Rendering functions
// function renderQuestionText() {}

// // Event handlers
// function handleAnswerSubmitted() {
//   $('.user-controls').on('click', '.submit-answer', () => {
//     // Retrieve answer identifier of user-checked radio button
//     // Perform check: User answer === Correct answer?
//     // Update STORE and render appropriate section
//   });
// }

// $(function(){
//     handleAnswerSubmitted();
// });
