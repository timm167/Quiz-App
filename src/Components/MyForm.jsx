import React from 'react';
import {topics, difficulties} from '../App'
import './Components.css'

// generates a random topic if none is selected
function backupTopic() {
    return topics[Math.floor(Math.random()*topics.length)] // returns a random topic
  }
  
// generates a random difficulty if none is selected
function backupDifficulty() {
    return difficulties[Math.floor(Math.random()*difficulties.length)] // returns a random difficulty
  } 


export default function MyForm({formSubmit, topics, difficulties}) {

    // Checks values of topics and difficulties passed in by event handler
    // uses formSubmit prop to pass values to App component
    function handleSubmit(event) {
        event.preventDefault()
        const selectedTopic = event.target['topic-radio'].value || backupTopic();
        const selectedDifficulty = event.target['difficulty-radio'].value || backupDifficulty();
        formSubmit(selectedTopic, selectedDifficulty)
    }

    return (
        <div className='container'>
            <form className='start-container'onSubmit={handleSubmit}>
                <div className="start-form">
                    {/* Form section for user to select a topic using labeled radio inputs */}
                    <div className='choose'>
                        <h3>Choose a topic</h3>
                    </div>
                    <label className='choice'>
                        <input type="radio" name="topic-radio" value={topics[0]}/>
                            {topics[0]}
                    </label>
                    <label className='choice'>
                        <input type="radio" name="topic-radio" value={topics[1]}/>
                            {topics[1]}
                    </label>
                    <label className='choice'>
                        <input type="radio" name="topic-radio" value={topics[2]}/>
                            {topics[2]}
                    </label>
                </div>
                <div className="start-form">
                    {/* Form section for user to select a difficulty using labeled radio inputs */}
                    <div className='choose'>
                        <h3>Choose a difficulty</h3>
                    </div>
                        <label className='choice'>
                            <input type="radio" name="difficulty-radio" value={difficulties[0]}/>
                                {difficulties[0]}
                        </label>
                        <label className='choice'>
                            <input type="radio" name="difficulty-radio" value={difficulties[1]}/>
                                {difficulties[1]}
                        </label>
                        <label className='choice'>
                            <input type="radio" name="difficulty-radio" value={difficulties[2]}/>
                                {difficulties[2]}
                        </label>
                </div>
                <button className='nav-button start-game' type="submit">Start Quiz</button>
            </form>
        </div>
    )
}