import Review from './Review'
import {useState} from 'react'
import { endMessage } from '../utils/endMessage'
import {numberOfQuestions} from '../content/content.json'

export default function EndScreen({displayData}) {
    // Set state for review to false to delay display of review page
    const [review, setReview] = useState(false)
    const score = displayData.filter((question) => question.correctAnswer === question.selectedAnswer).length // Calculates score based on correct answers

    return (
        <div className="end-screen">
            <h2>You scored {score} out of {numberOfQuestions}!</h2>
            {/* Displays message and score */}
            <h4 id='end-message' className='align-text'>{endMessage(score)}</h4>
            <div  className={!review && 'end-buttons-container'}> 
                {/* Conditionally displayes review or button pair to ask user if they want to see review */}
                {review ? <Review displayData={displayData}/>: 
                <div className='end-buttons-container'>
                    <button className="nav-button" id='end-nav-play-button' onClick={() => window.location.reload()}>Play Again</button>
                    <button className="nav-button" id='end-nav-review button' onClick={() => setReview(true)}>Review answers</button>
                </div>}
            </div>
        </div>
    )
}