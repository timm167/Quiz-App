import React from 'react';
import { useState } from 'react';

// Arrays of difficulties and topics 

const topics = ['Sport', 'Celebrities', 'Animals']
const difficulties = ['Easy', 'Medium', 'Hard']   


export default function MyForm({onSubmit}) {

    function handleSubmit(event) {
        event.preventDefault()
        const topic = (event.target['topic-radio'].value)
        const difficulty = (event.target['difficulty-radio'].value)
        onSubmit({topic, difficulty})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div id="topic-form">
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