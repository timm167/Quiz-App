import React from 'react';

export default function Questions({questionData}){
    return (
        questionData.results.map((question, index) => {
        const options = [...question.incorrect_answers, question.correct_answer]
        options.sort(() => Math.random() - 0.5);
        return (
            <div key={index}>
                <h2>{question.question}</h2>
                <form>
                    {options.map((option, i) => (
                        <label key={i}>
                            <input type="radio" name="question" value={option}/>
                            {option}
                        </label>
                    ))}
                </form>
            </div>
        );
    }));
}
