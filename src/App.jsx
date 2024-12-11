import { useState } from 'react'
import './App.css'
import MyForm from './Components/MyForm'
import Questions from './Components/Questions'

function App() {

  return (
    <main>
      <h3>Score: 0</h3>
      <div id="selection-screen">      
        <h2>Choose a topic and difficulty.</h2>  
        <MyForm/>
      </div>
      <div>
        <Questions/>
      </div>
    </main>
  )
}

export default App
