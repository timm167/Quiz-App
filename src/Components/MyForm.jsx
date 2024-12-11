import React from 'react';
import { useState } from 'react';

// Arrays of difficulties and topics 

const topics = [Sport, Celebrities, Animals]
const difficulties = [Easy, Medium, Hard]   

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
                    <label for="">
                        <input type="radio">
                            Sport
                        </input>
                    </label>
                </div>
                <div id="difficulty-form">
                    <label for="">
                        <input type="radio">
                            Easy
                        </input>
                    </label>
                </div>
            </form>
        </div>
    )
}