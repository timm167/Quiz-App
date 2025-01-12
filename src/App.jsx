import { useEffect, useState } from 'react'
import MyForm from './Components/MyForm'
import Questions from './Components/Questions'
import EndScreen from './Components/EndScreen'
import Welcome from './Components/Welcome'
import Topic from './Components/Topic'
import fetchQuiz from './utils/fetchQuiz'
import {topic1, topic2, topic3} from './content/content.json'

// Export content to another file
// abstracting content and functions

// Array of topics and difficulties to use here and pass to MyForm component
export const topics = [topic1, topic2, topic3]
export const difficulties = ['Easy', 'Medium', 'Hard']

// Main App component to be exported and rendederd in main.jsx
function App() {
  const [currentScreen, setCurrentScreen] = useState('home') // initial state is home screen
  const [formResponse, setFormResponse] = useState() // initial state is a random topic and difficulty
  const [jsonData, setJsonData] = useState(null) // initial state is null

  // Fetches data from the Open Trivia DB API based on the formResponse state
  useEffect(() => {
    fetchQuiz({formResponse, currentScreen, setJsonData})
  }, [formResponse, currentScreen]) 

  // Function to handle form submission. 
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

  // Main return statement to render the app
  return (
    <main>
      {/* Display either Topic or Welcome */}
      {formResponse ? <Topic formResponse={formResponse}/> : <Welcome/> }

      {/* Display MyForm Component */}  
      {currentScreen === 'home' && 
          <MyForm 
            formSubmit={handleFormSubmit} 
            topics={topics} 
            difficulties={difficulties} 
            />
      }
      
      {/* Display Questions Component */}
      {currentScreen === 'questions' && jsonData && (
          
          <Questions
            questionData={jsonData}
            quizHandler={quizHandler}
            finishQuiz={() => setCurrentScreen('end')}
          />
      )}

      {/* Display EndScreen Component */}
      {currentScreen === 'end' && jsonData && (
        <EndScreen displayData={jsonData} />
      )}
    </main>
  );
}

export default App
