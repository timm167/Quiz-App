import {useState} from 'react';

export default function Questions({questionData}){
    const [currentQuestion, setCurrentQuestion] = useState(0); // state for displaying current question

    const question = questionData.results[currentQuestion]; // gets the current question from the questionData prop
    const options = [...question.incorrect_answers, question.correct_answer] // creates an array of all possible answers
    options.sort(() => Math.random() - 0.5); // shuffles the array of answers

    return (
        <div id="question-container">
            <h2>{question.question}</h2>
            <form>
                {options.map((option, i) => (
                    <label key={i}>
                        <input type="radio" name="question" value={option}/>
                        {option}
                    </label>
                ))}
            </form>
            {/* <div>
                <button onClick={handlePreviousQuestion}>
                    Previous
                </button>
                <button onClick={handleNextQuestion}>
                    Next
                </button>
            </div> */}
        </div>
    );
};
