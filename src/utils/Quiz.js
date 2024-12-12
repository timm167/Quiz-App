export default function createQuizData(jsonData){
    const questions = jsonData.results.map((question, index) => {
        const options = [...question.incorrect_answers, question.correct_answer]; // creates an array of all possible answers
        const shuffledOptions = options.sort(() => Math.random() - 0.5); // shuffles the answers
        return {
            qNo: index + 1,
            question: question.question,
            options: shuffledOptions,
            correctAnswer: question.correct_answer,
            selectedAnswer: ''
        }
    })
    return questions
}

