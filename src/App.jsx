import { useEffect, useState } from 'react'
import './App.css'
import MyForm from './Components/MyForm'
import Questions from './Components/Questions'

// function setInitialTopic() {
//   return topics[Math.floor(Math.random()*topics.length)] // returns a random topic
// }

// function setInitialDifficulty() {
//   return difficulties[Math.floor(Math.random()*difficulties.length)] // returns a random difficulty
// }

function App() {

  // const [topic, setTopic] = useState(setInitialTopic());
  // const [difficulty, setDifficulty] = useState(setInitialDifficulty());
  const [formResponse, setFormResponse] = useState()

  function handleFormSubmit(topic, difficulty) {
    console.log('Form submitted with:', { topic, difficulty })
    setFormResponse({topic, difficulty})
   }
  
  useEffect(() => {
  formResponse ? console.log(formResponse) : console.log('No form response yet')
  }, [formResponse])

  return (
    <main>
      <h3>Score: 0</h3>
      <div id="selection-screen">      
        <h2>Choose a topic and difficulty.</h2>  
        <MyForm onSubmit={handleFormSubmit}/>
      </div>
      <div>
        <Questions/>
      </div>
    </main>
  )
}

export default App
