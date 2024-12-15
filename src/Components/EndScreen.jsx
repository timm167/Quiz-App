import Review from './Review'
import {useState} from 'react'

export default function EndScreen({displayData}) {
    const [review, setReview] = useState(false)
    const score = displayData.filter((question) => question.correctAnswer === question.selectedAnswer).length
    const message = () => {switch(score){
        case 10:
            return 'You are a quiz master!'
        case 10 > score > 8:
            return 'Almost perfect!'
        case 7:
            return 'Great job!'
        case 7 > score > 5:
            return 'Not bad!'
        case 5 > score > 3:
            return 'I mean... not great.'
        default:
            return 'You would have done better guessing :('
    }}

    return (
        <div className="end-screen">
            <h2>You scored {score} out of 10!</h2>
            <h3 id='end-message'>{message()}</h3>
            <div className={!review && 'nav-container'}>
                {review ? <Review displayData={displayData}/>: <button className="nav-button" onClick={() => setReview(true)}>Review answers</button>}
                <button className="nav-button" onClick={() => window.location.reload()}>Play Again</button>
            </div>
        </div>
    )
}