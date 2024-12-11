import React from 'react';
import { useState } from 'react';

// Arrays of difficulties and topics 

const topics = ['Sport', 'Celebrities', 'Animals']
const difficulties = ['Easy', 'Medium', 'Hard']   

function setInitialTopic() {
    return topics[Math.floor(Math.random()*topics.length)] // returns a random topic
}

function setInitialDifficulty() {
    return difficulties[Math.floor(Math.random()*difficulties.length)] // returns a random difficulty
}

export default function MyForm() {
    const [topic, setTopic] = useState(setInitialTopic());
    const [difficulty, setDifficulty] = useState(setInitialDifficulty());

    return (
        <div>
            <form>
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
                        <input type="radio"/>
                            Easy
                    </label>
                </div>
                <button type="submit">Start Quiz</button>
            </form>
        </div>
    )
}