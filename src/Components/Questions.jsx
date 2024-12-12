import {useState} from 'react';

export default function Questions({questionData}){ // CREATE A COPY OF THE QUESTION DATA IN FUTURE
    const [currentQuestion, setCurrentQuestion] = useState(1); // state for displaying current question
    const [selectedAnswer, setSelectedAnswer] = useState(''); // state for storing selected answer

    // Function to handle quiz responses
    function quizHandler(question) {
        questionData[question.qNo - 1] = question
    }

    // Navigates to next question
    function handleNextQuestion() {
        if (currentQuestion < questionData.length){ // Checks if there are more questions
            question.selectedAnswer = selectedAnswer; // Saves selected answer
            quizHandler(question);
            setSelectedAnswer(''); // Resets selected answer
            setCurrentQuestion(currentQuestion + 1); // Next question
        }
    }

    // Navigates to previous question
    function handlePreviousQuestion() { 
        if (currentQuestion > 1){ // Checks if there are previous questions
            question.selectedAnswer = selectedAnswer; // Saves selected answer
            quizHandler(question);
            setSelectedAnswer(''); 
            setCurrentQuestion(currentQuestion - 1); // Previous question
        }
    }

    // gets the question by qNo based on currentQuestion state
    const question = questionData.find(question => question.qNo === currentQuestion);

    // qNo: index + 1,
    // question: question.question,
    // options: shuffledOptions,
    // correctAnswer: question.correct_answer

    return (
        <div id="question-container">
            <h2>{question.qNo + '. ' + question.question}</h2>
            <form>
                {question.options.map((option, i) => (
                    <label key={i}>
                        <input 
                            type="radio" 
                            name="question" 
                            value={option} 
                            checked={question.selectedAnswer === option || selectedAnswer === option}
                            onChange={() => {setSelectedAnswer(option)}}/>
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
