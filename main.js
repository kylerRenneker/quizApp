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
  }

];

//The COUNTER object is used to store the current score and question number
//they can be incremented within a function using COUNTER.score++ or COUNTER.questionNumber++
// const COUNTER = {
//   score: 0,
//   questionNumber: 0
// }

const INDEX = {
  questionIndex: 0
}
const STORE = {
    question: QUESTIONS[INDEX.questionIndex].question,
    answers: QUESTIONS[INDEX.questionIndex].answers,
    correctAnswer: QUESTIONS[INDEX.questionIndex].correctAnswer,
    score: 0,
    questionNumber: 0,
};

function generateIntroView(){
  return `<div class="js-quiz-start">
  <h1>Country Quiz</h1>
  <p>Let's test your knowledge on country's capitals!</p>
  <button type="button" name="button" class="startButton">Start Quiz!</button>
</div>`
}

function renderIntroView(){
  $('.questionAnswerForm').html(generateIntroView());
}

// function render() {
//   let question = QUESTIONS[INDEX.questionIndex].question;
  
//   if(STORE.questionNumber === 0){
//     $('.questionAnswerForm').html(generateIntroView());
//     startQuizOnClick();
//     STORE.questionNumber++;
//   }
//   else if(STORE.questionNumber < QUESTIONS.length+1){
//     renderQuestionAnswerText();
//     handleAnswerSubmitted();
//     renderNextQuestion();
//   }
//   console.log(question);
//   console.log(QUESTIONS[INDEX.questionIndex].question);
//   console.log(question);
// }




//This will listen for the click event on start button and will call the function needed 
//to load the first question and remove the hardcoded .js-quiz-start div
function startQuizOnClick(){
  $('.js-quiz-start').on('click', '.startButton', function(){
    renderQuestionAnswerText();
  })
}

//load the next question to the store based on the questionNumber
function loadQuesitonToSTORE(){
  //based on the question number the first object in the QUESTIONS array of objects will be
  //loaded into the store
}

//form the the HMTL template for a given question and asnwers in the STORE object
//check to see if the questionNumber is less than or equal to the QUESTIONS.length
//if it is generate the questino based on the questionNumber 
//else render the quiz results page
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

//render the question and answers and insert that HTML into the DOM
function renderQuestionAnswerText(){
  $('.questionAnswerForm').html(generateQuestion());
  handleAnswerSubmitted();
}

// on submission of answer check to see if the answer submitted is === to the answer in the STORE
// object and if it is then run the function to display answer correct & incriment the score 
// and if the answer is not === to the answer in the STORE object then run the function to display answer incorrect
function handleAnswerSubmitted(){
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
    console.log('handleanswer is rtunning');
    $('form').on('submit', function(event){
      event.preventDefault();
      let selected = $('input:checked');
      let answer = selected.val();
      if(answer === QUESTIONS[INDEX.questionIndex].correctAnswer){
        $('.questionAnswerForm').html(generateUserFeedbackCorrect());
        STORE.score++;
      }
      else{
        $('.questionAnswerForm').html(generateUserFeedbackIncorrect());
      }
      $('.score').text(STORE.score);
      console.log(STORE.correctAnswer);
      renderNextQuestion();
    })
    //get the value of the answer selected and assign that to a variable
    //if the the value of the answer selected is equal to the correctAnswer
        // renderUserFeedback(generateUserFeedbackCorrect());
        //and increment the score and apply that to the container in the header that is keeping score
    //else
        // renderUserFeedback(generateUserFeedbackIncorrect());
}

//form and return an html template for if the user gets the answer correct 
function generateUserFeedbackCorrect(){
  return `<section class="js-feedback-correct">
  <h2>You are right!</h2>
  <button class='js-next-btn' type='submit' name='next-question'>Next question!</button> </section>`;
}
//form and return an html template for if the user gets the answer incorrect
function generateUserFeedbackIncorrect(){
  return `<section class='js-feedback-incorrect'> <h2>You are wrong!</h2>
      <p>The correct answer is ${QUESTIONS[INDEX.questionIndex].correctAnswer}</p>
      <button class='js-next-btn' type='submit' name='next-question'>Next question!</button>
    </section>`;
}

//depending on the answer submitted the correct or incorrect feedback html will be loaded
//in the DOM, the next question will be loaded into the store
// function renderUserFeedback(){
  
// }

//after the feedback is displayed the user clicks the next button and the next question is displayed
//in the DOM
function renderNextQuestion(){
  //listen for a click event on the next button
  //increment the COUNTER.questionNumber
  //and:
  $('.questionAnswerForm').on('click', '.js-next-btn', function(event){
    
      INDEX.questionIndex++;
      STORE.questionNumber++;
      console.log(INDEX.questionIndex);
      console.log(STORE.questionNumber);
      // renderQuestionAnswerText();
      renderQuestionAnswerText();
  })
  
}

//this will generate the html for the results page
function generateQuizResultsPass(){
  return `<section class="js-quiz-results">
        <h2>Great job! You know your capitals!</h2>
        <button type="submit" name="restart-quiz">Restart Quiz</button></section>`;
}

function generateQuizResultsFailed(){
  return `<section> <h2>Oh no! You did not get enough answers correct.</h2>
  <p>Study up on your capitals and try again!</p>
  <button type="submit" name="restart-quiz"> Restart Quiz</button>
  </section>`;
}

//This will load the quiz results page into the DOM and call the restartQuiz function so the 
//user can restart the quiz if desired
function renderQuizResults(){}

//this will reload the page to its original state
function restartQuiz(){

}

function creatQuiz(){
  // render();
  renderIntroView();
  startQuizOnClick();
  // handleAnswerSubmitted();

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
