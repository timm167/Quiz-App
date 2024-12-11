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
  const [jsonData, setJsonData] = useState(null) // initial state is null

  // Fetches data from the Open Trivia DB API based on the formResponse state
  useEffect(() => {
    if (formResponse) {
      const categoryIndex = () => { // Switch statement to return the relevant category index for API call based on the topic selected
        switch (formResponse.topic) {
          case 'Sport':
            return 21
          case 'Celebrities':
            return 26
          case 'Animals':
            return 27
          default:
            return 27 // Default to animals to avoid errors
        }
      }
      fetch(`https://opentdb.com/api.php?amount=10&category=${categoryIndex()}&difficulty=${formResponse.difficulty.toLowerCase()}`) // Uses embedded expressions for custom api call
      .then(response => response.json()) //  Converts response to json
      .then(data => setJsonData(data)) // Sets jsonData state to the data from the API
    }
  }, [formResponse]) // useEffect will run after formResponse state changes to avoid async issues

  // Function to handle form submission. 
  // Sets formResponse based on the results from passed onSubmit prop back from MyForm component.
  function handleFormSubmit(topic, difficulty) {
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
        <Questions questionData={jsonData}/>
      </div>
    </main>
  )
}

export default App
