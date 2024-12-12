import {useEffect, useState} from 'react';

export default function Questions({questionData, quizHandler}){
    const [currentQuestion, setCurrentQuestion] = useState(1); // state for displaying current question
    const [selectedAnswer, setSelectedAnswer] = useState(''); // state for storing selected answer

    // Navigates to next question
    function handleNextQuestion() {
        if (currentQuestion < questionData.length){
            question.selectedAnswer = selectedAnswer;
            quizHandler(question);
            setSelectedAnswer('');
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    // Navigates to previous question
    function handlePreviousQuestion() {
        if (currentQuestion > 1){
            question.selectedAnswer = selectedAnswer;
            quizHandler(question);
            setSelectedAnswer('');
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    const question = questionData.find(question => question.qNo === currentQuestion);

    // qNo: index + 1,
    // question: question.question,
    // options: shuffledOptions,
    // correctAnswer: question.correct_answer

    return (
        <div id="question-container">
            <h2>{question.question}</h2>
            <form>
                {question.options.map((option, i) => (
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
