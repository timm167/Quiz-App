import backupData from '../content/backupData'
import convertText from './convertText';

function mapData(data){
    const questions = data.results.map((question, index) => {
        const options = [...question.incorrect_answers, question.correct_answer]; // creates an array of all possible answers
        const shuffledOptions = options.sort(() => Math.random() - 0.5); // shuffles the answer
        const newShuffledOptions = shuffledOptions.map((option) => { 
            return convertText(option)
        }); // Replaces HTML entities with their respective characters same as below
        return {
            qNo: index + 1,
            question: convertText(question.question), // Replaces HTML entities with their respective characters
            options: newShuffledOptions,
            correctAnswer: question.correct_answer,
            selectedAnswer: ''
        }
    })
    return questions
}

export default function createQuizData(jsonData){
    try {
        return mapData(jsonData)
    }
    catch (error) { // If an error occurs, the backup data is used
        console.log("Error fetching data. Using backup data instead.")
        return mapData(backupData)
    }
    
}

