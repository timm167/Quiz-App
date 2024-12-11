import { useEffect, useState } from 'react'
import './App.css'
import MyForm from './Components/MyForm'
import Questions from './Components/Questions'

// Array of topics and difficulties to use here and pass to MyForm component
const topics = ['Sport', 'Celebrities', 'Animals']
const difficulties = ['Easy', 'Medium', 'Hard']   

// Random number gen to pick initial topic and difficulty in-case user doesn't select one (Initial state)
function setInitialTopic() {
  return topics[Math.floor(Math.random()*topics.length)] // returns a random topic
}

function setInitialDifficulty() {
  return difficulties[Math.floor(Math.random()*difficulties.length)] // returns a random difficulty
}

// Main App component to be exported and rendederd in main.jsx
function App() {
  const [formResponse, setFormResponse] = useState({'topic': setInitialTopic(), 'difficulty': setInitialDifficulty()}) // initial state is a random topic and difficulty

  // Function to handle form submission. 
  // Sets formResponse based on the results from passed onSubmit prop back from MyForm component.
  function handleFormSubmit(topic, difficulty) {
    console.log('Form submitted with:', { topic, difficulty })
    setFormResponse({'topic': topic, 'difficulty': difficulty})
   }
  
  // Commented out debugging code
  // useEffect(() => {
  // formResponse ? console.log(formResponse) : console.log('No form response yet')
  // }, [formResponse])

  return (
    <main>
      <h3>Score: 0</h3>
      <div id="selection-screen">      
        <h2>Choose a topic and difficulty.</h2>  
        <MyForm formSubmit={handleFormSubmit} topics={topics} difficulties={difficulties}/>
      </div>
      <div>
        <Questions/>
      </div>
    </main>
  )
}

export default App
