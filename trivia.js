
const questionDiv = document.getElementById('#question');
const answerDiv = document.getElementById('#answer');
const feedbackDiv = document.getElementById('#feedback');

let currentQuestion = null;

function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length);
            const question = questions[index];
            if (index > questions.length) {
                reject('an error occurred while fetching the trivia question.');
            } else {
                resolve(question);
            }
        }, 1000);
    });
}

function displayQuestion(triviaQuestion) {
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = '';
    feedbackDiv.textContent = '';
}

document.querySelector('#questionBtn').addEventListener('click', () => {
    getTriviaQuestion().then((question) => {
        currentQuestion = question;
        displayQuestion(question);
    })
    .catch((error) => {
        console.error(error);
    })
})

document.querySelector('#answerBtn').addEventListener('click', () => {
    let feedbackMessage; //temporary variable to store a message
    const userAnswer = answerDiv.value.trim().toLowerCase();//normalize the users answer
    console.log(userAnswer, currentQuestion.answer); //prints both answers to the log to help with debugging
    if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) { //evaluates both answers
        feedbackDiv.style.color = "green"; //update font color of the feedbackDiv object
        feedbackMessage = `Great job! Your answer is correct.`; //update the message variable HENCE UPTICKS
    } else {
        feedbackDiv.style.color = "red"; //update font color of the feedbackDiv object
        feedbackMessage = `Sorry, that is incorrect. The correct answer is: "${current.Question.answer}". Try another question!`; 
    }
    feedbackDiv.textContent = feedbackMessage;
})