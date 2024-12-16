import Review from './Review'
import {useState} from 'react'

export default function EndScreen({displayData}) {
    // Set state for review to false to delay display of review page
    const [review, setReview] = useState(false)
    const score = displayData.filter((question) => question.correctAnswer === question.selectedAnswer).length // Calculates score based on correct answers
    const message = () => { // Generates message based on score
        if (score === 10) {
            return 'You should find something better to do with your time.'
        } else if (score > 7) {
            return `I bet you're used to being second best.`
        } else if (score === 7) {
            return 'Not bad! Not very good either.'
        } else if (score > 4) {
            return `That's almost as smart as the average 12 year old!`
        } else if (score > 2) {
            return `You're not exactly Einstein, are you?`
        } else {
            return 'A monkey with a keyboard would have done better :('
        }
    };

    return (
        <div className="end-screen">
            <h2>You scored {score} out of 10!</h2>
            {/* Displays message and score */}
            <h4 id='end-message' className='align-text'>{message(score)}</h4>
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