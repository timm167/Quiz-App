import './Components.css'

export default function Review({displayData}) {
    return <div className='review-page-container'> 
        {displayData.map((question, index) => {
        return (
            <div className={question.correctAnswer === question.selectedAnswer ? 'correct review-container' : 'incorrect review-container'}>
                <h2 className='align-text'>{question.qNo + '. ' + question.question}</h2>
                <ul className='display-review-options'>
                    {question.options.map((option, i) => (
                        <li 
                        key={i} 
                        className={`${option === question.selectedAnswer ? 'selected' : 'not-selected'} 
                        ${option === question.correctAnswer ? 'right' : 'wrong'} 
                        ${question.options.length === 2 && 'true-false-review'} review-option`}>
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        )})
    }
        <button className="nav-button review-container" id="reset" onClick={() => window.location.reload()}>Play Again</button>
    </div>
}