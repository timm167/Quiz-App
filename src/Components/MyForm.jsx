import React from 'react';
import { useState } from 'react';

export default function MyForm({formSubmit, topics, difficulties}) {

    // Checks values of topics and difficulties passed in by event handler
    // uses formSubmit prop to pass values to App component

    function handleSubmit(event) {
        event.preventDefault()
        const selectedTopic = (event.target['topic-radio'].value)
        const selectedDifficulty = (event.target['difficulty-radio'].value)
        formSubmit(selectedTopic, selectedDifficulty)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div id="topic-form">
                    {/* Form section for user to select a topic using labeled radio inputs */}
                    <h3>Choose a topic</h3>
                    <label>
                        <input type="radio" name="topic-radio" value={topics[0]}/>
                            {topics[0]}
                    </label>
                    <label>
                        <input type="radio" name="topic-radio" value={topics[1]}/>
                            {topics[1]}
                    </label>
                    <label>
                        <input type="radio" name="topic-radio" value={topics[2]}/>
                            {topics[2]}
                    </label>
                </div>
                <div id="difficulty-form">
                    {/* Form section for user to select a difficulty using labeled radio inputs */}
                    <h3>Choose a difficulty</h3>
                        <label>
                            <input type="radio" name="difficulty-radio" value={difficulties[0]}/>
                                {difficulties[0]}
                        </label>
                        <label>
                            <input type="radio" name="difficulty-radio" value={difficulties[1]}/>
                                {difficulties[1]}
                        </label>
                        <label>
                            <input type="radio" name="difficulty-radio" value={difficulties[2]}/>
                                {difficulties[2]}
                        </label>
                </div>
                <button type="submit">Start Quiz</button>
            </form>
        </div>
    )
}