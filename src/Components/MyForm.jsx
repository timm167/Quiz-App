import React from 'react';
import './Components.css'
import {backupTopic, backupDifficulty} from '../utils/backup'
import {start} from '../content/content.json'

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
                    {/* Passes selection to handleSubmit through event */}
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
                    {/* Passes selection to handleSubmit through event */}
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
                <button className='nav-button start-game' type="submit">{start} Quiz</button>
            </form>
        </div>
    )
}