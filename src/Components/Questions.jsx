import {useEffect, useState} from 'react';
import './Components.css'
import {handleNext, handlePrevious} from '../utils/handleNav'
import {numberOfQuestions, next, finish, previous} from '../content/content.json'

export default function Questions({questionData, quizHandler, finishQuiz}){ 
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
        handleNext({selectedAnswer, alertShown, currentQuestion, questionData, question, quizHandler, setCurrentQuestion, setAlertShown, finishQuiz})
    }

    // Navigates to previous question
    function handlePreviousQuestion() { 
        handlePrevious({selectedAnswer, alertShown, currentQuestion, questionData, question, quizHandler, setCurrentQuestion, setAlertShown})
    }

    {console.log(questionData)}
    return (
        <div className="question-container">
            <h2 className='align-text'>{question.qNo + '. ' + question.question}</h2>
            <form className='question-form'>
                {/* uses .map to display each radio  */}
                {question.options.map((option, i) => (
                    <label key={i}  
                    className={`${question.options.length === 2 && 'true-false'} custom-radio`}> {/* Adds class for true/false questions to make buttons larger*/}
                        <input 
                            type="radio" 
                            name="question" 
                            value={option} 
                            checked={question.selectedAnswer === option || selectedAnswer === option} /*Checks box when option selected*/
                            onChange={() => {setSelectedAnswer(option)}}/>
                        <span>{option}</span>
                    </label>
                ))}
            </form>
            <h2>{selectedAnswer}</h2>
            {/* Adds navigation buttons that call functions above */}
            <div className='nav-container'>
                <button className="nav-button" onClick={handlePreviousQuestion}>
                    {previous}
                </button>
                <button className="nav-button" onClick={handleNextQuestion}>
                    {question.qNo === numberOfQuestions ? finish : next}
                </button>
            </div>
            {/* Provides one time reminder to select answer */}
            <div>
                {alertShown && <h4>Please select an answer.</h4>}
            </div>
        </div>
    );
};
