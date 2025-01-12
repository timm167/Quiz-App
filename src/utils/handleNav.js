function handleNext({selectedAnswer, alertShown, currentQuestion, questionData, question, quizHandler, setCurrentQuestion, setAlertShown, finishQuiz}){
    if (selectedAnswer === '' && !alertShown){ // Checks if an answer has been selected
        setAlertShown(true);
        return;
    } 
    if (currentQuestion < questionData.length){ // Checks if there are more questions
        question.selectedAnswer = selectedAnswer; // Saves selected answer
        quizHandler(question);
        setCurrentQuestion(currentQuestion + 1); // Next question
        setAlertShown(false);
    }
    else {
        question.selectedAnswer = selectedAnswer; // Saves selected answer
        quizHandler(question);
        setAlertShown(false);
        finishQuiz();
    }
}

function handlePrevious({selectedAnswer, currentQuestion, question, quizHandler, setCurrentQuestion, setAlertShown}){
    if (currentQuestion > 1){ // Checks if there are previous questions
        question.selectedAnswer = selectedAnswer; // Saves selected answer
        quizHandler(question);
        setCurrentQuestion(currentQuestion - 1); // Previous question
        setAlertShown(false);
    }
}

export {handleNext, handlePrevious}