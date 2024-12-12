import {useEffect, useState} from 'react';

export default function Questions({questionData}){
    const [currentQuestion, setCurrentQuestion] = useState(0); // state for displaying current question
    const [selectedAnswer, setSelectedAnswer] = useState(''); // state for storing selected answer

    // Navigates to next question
    function handleNextQuestion() {
        if (currentQuestion < questionData.results.length - 1){
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    // Navigates to previous question
    function handlePreviousQuestion() {
        if (currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    return (
        <div id="question-container">
            <h2>{question.question}</h2>
            <form>
                {options.map((option, i) => (
                    <label key={i}>
                        <input type="radio" name="question" value={option} onChange={() => {setSelectedAnswer(option)}}/>
                        {option}
                    </label>
                ))}
            </form>
            <h2>{selectedAnswer}</h2>
            <div>
                <button onClick={handlePreviousQuestion}>
                    Previous
                </button>
                <button onClick={handleNextQuestion}>
                    Next
                </button>
            </div>
        </div>
    );
};
