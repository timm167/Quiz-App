import React from 'react';
import { useState } from 'react';

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

    return 'Form here'
}