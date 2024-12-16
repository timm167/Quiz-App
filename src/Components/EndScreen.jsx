import Review from './Review'
import {useState} from 'react'

export default function EndScreen({displayData}) {
    const [review, setReview] = useState(false)
    const score = displayData.filter((question) => question.correctAnswer === question.selectedAnswer).length
    const message = () => {
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
            <h3 id='end-message'>{message(score)}</h3>
            <div  className={!review && 'end-buttons-container'}> 
                {review ? <Review displayData={displayData}/>: <div className='end-buttons-container'><button className="nav-button" id='end-nav-review button' onClick={() => setReview(true)}>Review answers</button>
                <button className="nav-button" id='end-nav-play-button' onClick={() => window.location.reload()}>Play Again</button></div>}
            </div>
        </div>
    )
}