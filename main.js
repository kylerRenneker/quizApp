// Here are our function stubs based on the function example provided below

const QUESTIONS = [];
const STORE = {};

//The COUNTER object is used to store the current score and question number
//they can be incremented within a function using COUNTER.score++ or COUNTER.questionNumber++
const COUNTER = {
  score: 0,
  questionNumber: 0
}

//This will listen for the click event on start button and will call the function needed 
//to load the first question and remove the hardcoded .js-quiz-start div
function startQuizOnClick(){}

//form the the HMTL template for a given question and asnwers in the STORE object
//check to see if the questionNumber is less than or equal to the STORE.length
//if it is generate the questino based on the questionNumber
//else render the quiz results page
function generateQuestion(){}

//render the question and answers and insert that HTML into the DOM
function renderQuestionAnswerText(){}

// on submission of answer check to see if the answer submitted is === to the answer in the STORE
// object and if it is then run the function to display answer correct incriment the score 
// and if the answer is not === to the answer in the STORE object then run the function to display answer incorrect
function handleAnswerSubmitted(){
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
}

//form and return an html template for if the user gets the answer correct 
function generateUserFeedbackCorrect(){}

//form and return an html template for if the user gets the answer incorrect
function generateUserFeedbackIncorrect(){}

//depending on the answer submitted the correct or incorrect feedback html will be loaded
//in the DOM, the next question will be loaded into the store and then rendered
function renderUserFeedback(){}

//after the feedback is displayed the user clicks the next button and the next question is displayed
//in the DOM
function renderNextQuestion(){}

//load the next question to the store based on the questionNumber
function loadQuesitonToSTORE(){}

//this will generate the html for the results page
function generateQuizResults(){}

//This will load the quiz results page into the DOM and call the restartQuiz function so the 
//user can restart the quiz if desired
function renderQuizResults(){}

//this will reload the page to its original state
function restartQuiz(){}















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
