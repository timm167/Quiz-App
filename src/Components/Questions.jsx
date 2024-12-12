import {useEffect, useState} from 'react';

export default function Questions({questionData}){
    const [currentQuestion, setCurrentQuestion] = useState(0); // state for displaying current question
    const [selectedAnswer, setSelectedAnswer] = useState(''); // state for storing selected answer

    const question = questionData.results[currentQuestion]; // gets the current question from the questionData prop
    const options = [...question.incorrect_answers, question.correct_answer] // creates an array of all possible answers

    useEffect(() => {
    console.log('shuffling')
    options.sort(() => Math.random() - 0.5); // shuffles the array of answers
    console.log('shuffled', options)
    },[currentQuestion]) // useEffect will run after currentQuestion state changes to avoid async issues

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
