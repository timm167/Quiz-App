import Review from './Review'
import {useState} from 'react'

export default function EndScreen({displayData}) {
    const [review, setReview] = useState(false)
    const score = displayData.filter((question) => question.correctAnswer === question.selectedAnswer).length
    return (
        <div id="end-screen">
            <h2>You scored {score} out of 10!</h2>
            {review ? <Review displayData={displayData}/>: <button onClick={() => setReview(true)}>Review answers</button>}
            <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
    )
}