import {useEffect, useState} from 'react';
import './Components.css'

export default function Questions({questionData, quizHandler, finishQuiz}){ // CREATE A COPY OF THE QUESTION DATA IN FUTURE
    const [currentQuestion, setCurrentQuestion] = useState(1); // state for displaying current question
    const [selectedAnswer, setSelectedAnswer] = useState(''); // state for storing selected answer
    const [alertShown, setAlertShown] = useState(false); // state to track if alert has been shown

    // gets the question by qNo based on currentQuestion state
    const question = questionData.find(question => question.qNo === currentQuestion);

    // Updates selected answer when question changes
    useEffect(() => {
        setSelectedAnswer(question.selectedAnswer);
    },[currentQuestion, question])

    // Navigates to next question
    function handleNextQuestion() {
        if (selectedAnswer === '' && !alertShown){ // Checks if an answer has been selected
            setAlertShown(true);
            return;
        } 
        if (currentQuestion < questionData.length){ // Checks if there are more questions
            question.selectedAnswer = selectedAnswer; // Saves selected answer
            console.log(question)
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

    // Navigates to previous question
    function handlePreviousQuestion() { 
        if (currentQuestion > 1){ // Checks if there are previous questions
            question.selectedAnswer = selectedAnswer; // Saves selected answer
            quizHandler(question);
            setCurrentQuestion(currentQuestion - 1); // Previous question
            setAlertShown(false);
        }
    }

    return (
        <div className="question-container">
            <h2>{question.qNo + '. ' + question.question}</h2>
            <form className='question-form'>
                {question.options.map((option, i) => (
                    <label key={i}  
                    className={`${question.options.length === 2 && 'true-false'} custom-radio`}> 
                        <input 
                            type="radio" 
                            name="question" 
                            value={option} 
                            checked={question.selectedAnswer === option || selectedAnswer === option}
                            onChange={() => {setSelectedAnswer(option)}}/>
                        <span>{option}</span>
                    </label>
                ))}
            </form>
            <h2>{selectedAnswer}</h2>
            <div className='nav-container'>
                <button className="nav-button" onClick={handlePreviousQuestion}>
                    Previous
                </button>
                <button className="nav-button" onClick={handleNextQuestion}>
                    {question.qNo === 10 ? 'Finish' : 'Next'}
                </button>
            </div>
            <div>
                {alertShown && <p>Please select an answer.</p>}
            </div>
        </div>
    );
};
