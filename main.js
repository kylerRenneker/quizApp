// In-memory database of questions
const QUESTIONS = [];

// Create your initial store
const STORE = {
    // Current question
    // User's answer choice(s)
    // Current view
    // Score? Anything else?
};

// Template generators
function generateAnswerList(answers) {}

// Rendering functions
function renderQuestionText() {}

// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

$(function(){
    handleAnswerSubmitted();
});