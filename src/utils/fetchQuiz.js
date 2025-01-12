import {baseUrl} from '../content/config'
import createQuizData from './createQuizData'
import { sportAPIno, celebritiesAPIno, animalsAPIno  } from '../content/magicReplace'
import {numberOfQuestions} from '../content/content.json'

export default function fetchQuiz({formResponse, currentScreen, setJsonData}) {
    if (formResponse && currentScreen === 'questions') { 

        if (formResponse.topic === 'Celebrities' && formResponse.difficulty === 'Hard') {
          formResponse.difficulty = 'Medium'; // Force Medium due to API limitations
        }
        const categoryIndex = () => { // Switch statement to return the relevant category index for API call based on the topic selected
          switch (formResponse.topic) {
            case 'Sport':
              return sportAPIno
            case 'Celebrities':
              return celebritiesAPIno
            case 'Animals':
              return animalsAPIno
            default:
              return animalsAPIno // Default to animals to avoid errors
          }
        }
        fetch(`${baseUrl}?amount=${numberOfQuestions}&category=${categoryIndex()}&difficulty=${formResponse.difficulty.toLowerCase()}`) // Uses embedded expressions for custom api call
        .then(response => response.json()) //  Converts response to json
        .then (data => setJsonData(createQuizData(data)))
      }
}