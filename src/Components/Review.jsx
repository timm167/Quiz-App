import './Components.css'

export default function Review({displayData}) {
    return <div> 
        {displayData.map((question, index) => {
        return (
            <div className={question.correctAnswer === question.selectedAnswer ? 'correct review-container' : 'incorrect review-container'}>
                <h2>{question.qNo + '. ' + question.question}</h2>
                <ul>
                    {question.options.map((option, i) => (
                        <li 
                        key={i} 
                        className={`${option === question.selectedAnswer ? 'selected' : 'not-selected'} 
                        ${option === question.correctAnswer ? 'right' : 'wrong'}`}>
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        )})
    }
        <button className="nav-button" id="reset" onClick={() => window.location.reload()}>Play Again</button>
    </div>
}