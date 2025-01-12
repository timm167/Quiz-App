import React from 'react';
import './Components.css'
import {siteName, numberOfQuestions, start, next, finish, previous} from '../content/content.json'

// Displaying Welcome message & instructions
export default function Welcome() {
    return (
        <div className='instructions'>
            <div className='inner-instructions'>
                <h2>Welcome to {siteName}!</h2>
                <p>You will answer {numberOfQuestions} questions on a topic of your choosing to receive a score out of {numberOfQuestions}.</p>
                <p>You can navigate using the <strong>'{previous}'</strong> and <strong>'{next}'</strong> buttons then finally press <strong>'{finish}'</strong> on the last question to see your score.</p>
                <p>Choose a topic and difficulty to begin or just press <strong>'{start}'</strong> for a random choice!</p>
            </div>
        </div>
    )
}