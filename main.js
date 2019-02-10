// Here are our function stubs based on the function example provided at the bottom of this js file
const QUESTIONS = [
  {
    question: 'What is the capital of the United States?',
    answers: [
      'Washington D.C.',
      'Sacramento',
      'San Francisco',
      'New York'
    ],
    correctAnswer: 'Washington D.C.',
  },

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

  {
    question: 'What is the capital of Australia?',
    answers: [
      'Sydney',
      'Melbourne',
      'Brisbane',
      'Canberra'
    ],
    correctAnswer: 'Canberra',
  }

];

const INDEX = {
  questionIndex: 0
}
const STORE = {
    question: QUESTIONS[INDEX.questionIndex].question,
    answers: QUESTIONS[INDEX.questionIndex].answers,
    correctAnswer: QUESTIONS[INDEX.questionIndex].correctAnswer,
    score: 0
};

function generateIntroView(){
  return `<div class="js-quiz-start">
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
  STORE.question = QUESTIONS[INDEX.questionIndex].question;
  STORE.answers = QUESTIONS[INDEX.questionIndex].answers;
  STORE.correctAnswer = QUESTIONS[INDEX.questionIndex].correctAnswer;
}

function generateQuestion(){
  return `<section class="js-answer-template">
  <form>
    <fieldset>
      <legend>${QUESTIONS[INDEX.questionIndex].question}</legend>
  
      <label class="answerOption">
        <input type="radio" name="answer" value="${QUESTIONS[INDEX.questionIndex].answers[0]}">
        <span>${QUESTIONS[INDEX.questionIndex].answers[0]}</span>
      </label>
      
      <label class="answerOption">
        <input type="radio" name="answer" value="${QUESTIONS[INDEX.questionIndex].answers[1]}">
        <span>${QUESTIONS[INDEX.questionIndex].answers[1]}</span>
      </label>
      
      <label class="answerOption">
        <input type="radio" name="answer" value="${QUESTIONS[INDEX.questionIndex].answers[2]}">
        <span>${QUESTIONS[INDEX.questionIndex].answers[2]}</span>
      </label>

      <label class="answerOption">
        <input type="radio" name="answer" value="${QUESTIONS[INDEX.questionIndex].answers[3]}">
        <span>${QUESTIONS[INDEX.questionIndex].answers[3]}</span>
      </label>

      <button type="submit" name="submit">Submit</button>
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
      if(answer === QUESTIONS[INDEX.questionIndex].correctAnswer){
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

function generateUserFeedbackCorrect(){
  return `<section class="js-feedback-correct">
  <h2>You are right!</h2>
  <button class='js-next-btn' type='submit' name='next-question'>Next question!</button> </section>`;
}

function generateUserFeedbackIncorrect(){
  return `<section class='js-feedback-incorrect'> <h2>You are wrong!</h2>
      <p>The correct answer is ${QUESTIONS[INDEX.questionIndex].correctAnswer}</p>
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

function generateQuizResultsPass(){
  return `<section class="js-quiz-results">
        <h2>Great job! You know your capitals!</h2>
        <button class='js-restart-btn 'type="submit" name="restart-quiz">Restart Quiz</button></section>`;
}

function generateQuizResultsFailed(){
  return `<section> <h2>Oh no! You did not get enough answers correct.</h2>
  <p>Study up on your capitals and try again!</p>
  <button class='js-restart-btn 'type="submit" name="restart-quiz"> Restart Quiz</button>
  </section>`;
}

function renderQuizResults(){
  $('.js-question-Answer-Form').html(generateQuizResultsPass());
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
