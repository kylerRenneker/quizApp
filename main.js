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
    correctAsnwer: 'Washington D.C.',
  },

  {
    question: 'What is the capital of Spain?',
    answers: [
      'Barcelona',
      'Granada',
      'Madrid',
      'Seville'
    ],
    correctAsnwer: 'Madrid',
  },

  {
    question: 'What is the capital of Spain?',
    answers: [
      'Barcelona',
      'Granada',
      'Madrid',
      'Seville'
    ],
    correctAsnwer: 'Madrid',
  },

  {
    question: 'What is the capital of Spain?',
    answers: [
      'Barcelona',
      'Granada',
      'Madrid',
      'Seville'
    ],
    correctAsnwer: 'Madrid',
  },
];

//The COUNTER object is used to store the current score and question number
//they can be incremented within a function using COUNTER.score++ or COUNTER.questionNumber++
// const COUNTER = {
//   score: 0,
//   questionNumber: 0
// }

let questionIndex = 0;
let score = 0;

const STORE = {
    question: QUESTIONS[questionIndex].question,
    answers: QUESTIONS[questionIndex].answers,
    correctAsnwer: QUESTIONS[questionIndex].correctAsnwer,
    score: 0,
    questionNumber: 1,
    view: 'initialView'
};
console.log(STORE.answers);


function render() {
  renderQuestionAnswerText();
 
}




//This will listen for the click event on start button and will call the function needed 
//to load the first question and remove the hardcoded .js-quiz-start div
function startQuizOnClick(){
  $('.js-quiz-start').on('click', '.startButton', function(){
    //once the user clicks the start button the the js-quiz-start div will be removed
    //and the following functions ran to populate the DOM with the first question:
    render();
    //loadQuesitonToSTORE();
    //generateQuestion();
  })
  
  //once the user clicks the start button the the js-quiz-start div will be removed
  //and the following functions ran to populate the DOM with the first question:
  // loadQuesitonToSTORE();
  // generateQuestion();
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
  console.log(typeof answers);
  return `<section class="js-answer-template">
  <form>
    <fieldset>
      <legend>${STORE.question}</legend>
  
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE.answers[0]}">
        <span>${STORE.answers[0]}</span>
      </label>
      
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE.answers[1]}">
        <span>${STORE.answers[1]}</span>
      </label>
      
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE.answers[2]}">
        <span>${STORE.answers[2]}</span>
      </label>

      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE.answers[3]}">
        <span>${STORE.answers[3]}</span>
      </label>

      <button type="submit" name="submit">Submit</button>
    </fieldset>
  </form>
</section>`;
}

//render the question and answers and insert that HTML into the DOM
function renderQuestionAnswerText(){
  $('.questionAnswerForm').html(generateQuestion());
}

// on submission of answer check to see if the answer submitted is === to the answer in the STORE
// object and if it is then run the function to display answer correct & incriment the score 
// and if the answer is not === to the answer in the STORE object then run the function to display answer incorrect
function handleAnswerSubmitted(){
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section

    //get the value of the answer selected and assign that to a variable
    //if the the value of the answer selected is equal to the correctAnswer
        renderUserFeedback(generateUserFeedbackCorrect());
        //and increment the score and apply that to the container in the header that is keeping score
    //else
        renderUserFeedback(generateUserFeedbackIncorrect());
}

//form and return an html template for if the user gets the answer correct 
function generateUserFeedbackCorrect(){}

//form and return an html template for if the user gets the answer incorrect
function generateUserFeedbackIncorrect(){}

//depending on the answer submitted the correct or incorrect feedback html will be loaded
//in the DOM, the next question will be loaded into the store
function renderUserFeedback(){}

//after the feedback is displayed the user clicks the next button and the next question is displayed
//in the DOM
function renderNextQuestion(){
  //listen for a click event on the next button
  //increment the COUNTER.questionNumber
  //and:
  if(COUNTER.questionNumber < QUESTIONS.length){
    loadQuesitonToSTORE();
    renderQuestionAnswerText();
    handleAnswerSubmitted();
  }
  else{
    renderQuizResults();

  }
}

//this will generate the html for the results page
function generateQuizResults(){}

//This will load the quiz results page into the DOM and call the restartQuiz function so the 
//user can restart the quiz if desired
function renderQuizResults(){}

//this will reload the page to its original state
function restartQuiz(){

}

function creatQuiz(){
  startQuizOnClick();
  //renderQuestionAnswerText();
  handleAnswerSubmitted();
  renderNextQuestion();
  //render();
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
