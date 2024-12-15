import './Components.css'

export default function Review({displayData}) {
    return displayData.map((question, index) => {
        return (
        <div className='review-container'>
            <h2 className={question.correctAnswer === question.selectedAnswer ? 'correct' : 'incorrect'}>
                {question.qNo + '. ' + question.question}
            </h2>
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
        )
    })
}