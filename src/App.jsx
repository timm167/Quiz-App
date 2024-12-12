import { useEffect, useState } from 'react'
import './App.css'
import MyForm from './Components/MyForm'
import Questions from './Components/Questions'
import createQuizData from './utils/Quiz'
import EndScreen from './Components/EndScreen'

// Array of topics and difficulties to use here and pass to MyForm component
export const topics = ['Sport', 'Celebrities', 'Animals']
export const difficulties = ['Easy', 'Medium', 'Hard']

let formSubmitted = false
let homeScreen = true
let endScreen = false

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
      .then (data => setJsonData(createQuizData(data)))
    }
  }, [formResponse]) // useEffect will run after formResponse state changes to avoid async issues

  // Function to handle form submission. 
  // Sets formResponse based on the results from passed onSubmit prop back from MyForm component.
  function handleFormSubmit(topic, difficulty) {
    formSubmitted = true
    homeScreen = false
    setFormResponse({'topic': topic, 'difficulty': difficulty})
   }

  // Function to handle quiz responses
  function quizHandler(question) {
    setJsonData((prevData) =>
        prevData.map((q, index) =>
            index === question.qNo - 1 ? question : q
        )
    );
  }
  
  return (
    <main>
      {homeScreen ? <div id="selection-screen">
        <h2>Choose a topic and difficulty.</h2>  
        <MyForm formSubmit={handleFormSubmit} topics={topics} difficulties={difficulties}/>
      </div> : null}
      <div>
        {(jsonData && !endScreen) ? <Questions questionData={jsonData} quizHandler={quizHandler} finishQuiz={() => endScreen = true}/> : null}
      </div>
      <div>
        {endScreen ? <EndScreen displayData={jsonData}/> : null}
      </div>
    </main>
  )
}

export default App
