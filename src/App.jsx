import { useEffect, useState } from 'react'
import './App.css'
import MyForm from './Components/MyForm'
import Questions from './Components/Questions'
import createQuizData from './utils/Quiz'
import EndScreen from './Components/EndScreen'

// Array of topics and difficulties to use here and pass to MyForm component
export const topics = ['Sport', 'Celebrities', 'Animals']
export const difficulties = ['Easy', 'Medium', 'Hard']

// Main App component to be exported and rendederd in main.jsx
function App() {
  const [currentScreen, setCurrentScreen] = useState('home') // initial state is home screen
  const [formResponse, setFormResponse] = useState() // initial state is a random topic and difficulty
  const [jsonData, setJsonData] = useState(null) // initial state is null

  // Fetches data from the Open Trivia DB API based on the formResponse state
  useEffect(() => {
    if (formResponse && currentScreen === 'questions') { 
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
    setFormResponse({'topic': topic, 'difficulty': difficulty})
    setCurrentScreen('questions')
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
      {currentScreen === 'home' && (
        <div id="selection-screen">
          <MyForm formSubmit={handleFormSubmit} topics={topics} difficulties={difficulties} />
        </div>
      )}

      {currentScreen === 'questions' && jsonData && (
        <div>
          <Questions
            questionData={jsonData}
            quizHandler={quizHandler}
            finishQuiz={() => setCurrentScreen('end')}
          />
        </div>
      )}

      {currentScreen === 'end' && jsonData && (
        <EndScreen displayData={jsonData} />
      )}
    </main>
  );
}

export default App
