import React from 'react';

export default function Questions({questionData}) {
    return (
    <div>
        <p>{JSON.stringify(questionData)}</p>
    </div>
    )
}