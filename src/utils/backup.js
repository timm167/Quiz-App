import {topics, difficulties} from '../App'

// generates a random topic if none is selected
function backupTopic() {
    return topics[Math.floor(Math.random()*topics.length)] // returns a random topic
  }
  
// generates a random difficulty if none is selected
function backupDifficulty() {
    return difficulties[Math.floor(Math.random()*difficulties.length)] // returns a random difficulty
  } 

export {backupTopic, backupDifficulty}