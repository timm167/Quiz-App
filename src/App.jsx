import { useEffect, useState } from 'react'
import './App.css'
import MyForm from './Components/MyForm'
import Questions from './Components/Questions'
import createQuizData from './utils/Quiz'

// Array of topics and difficulties to use here and pass to MyForm component
export const topics = ['Sport', 'Celebrities', 'Animals']
export const difficulties = ['Easy', 'Medium', 'Hard']

let formSubmitted = false
let homeScreen = true

// Main App component to be exported and rendederd in main.jsx
function App() {
  const [formResponse, setFormResponse] = useState() // initial state is a random topic and difficulty
  const [jsonData, setJsonData] = useState(null) // initial state is null

  // Fetches data from the Open Trivia DB API based on the formResponse state
  useEffect(() => {
    if (formResponse && formSubmitted) {
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
      console.log('fetching data')
      fetch(`https://opentdb.com/api.php?amount=10&category=${categoryIndex()}&difficulty=${formResponse.difficulty.toLowerCase()}`) // Uses embedded expressions for custom api call
      .then(response => response.json()) //  Converts response to json
      .then(data => setJsonData(data)) // Sets jsonData state to the data from the API
    }
  }, [formResponse]) // useEffect will run after formResponse state changes to avoid async issues

  // Function to handle form submission. 
  // Sets formResponse based on the results from passed onSubmit prop back from MyForm component.
  function handleFormSubmit(topic, difficulty) {
    formSubmitted = true
    homeScreen = false
    setFormResponse({'topic': topic, 'difficulty': difficulty})
   }
  
  return (
    <main>
      <h3>Score: 0</h3>
      {homeScreen ? <div id="selection-screen">      
        <h2>Choose a topic and difficulty.</h2>  
        <MyForm formSubmit={handleFormSubmit} topics={topics} difficulties={difficulties}/>
      </div> : null}
      <div>
        {jsonData ? <Questions questionData={createQuizData(jsonData)}/> : <p>Select and start</p>}
      </div>
    </main>
  )
}

export default App
