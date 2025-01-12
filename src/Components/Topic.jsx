import React from 'react';
import './Components.css'
// Displaying Welcome message & instructions
export default function Topic({formResponse}) {
    return (
        <div className='form-result-displayer'>
            <h2 className='align-text form-result-displayer-text'>Topic: {formResponse.topic}</h2>
            <h2 className='align-text form-result-displayer-text'>Difficulty: {formResponse.difficulty}</h2>
        </div>
    )
}