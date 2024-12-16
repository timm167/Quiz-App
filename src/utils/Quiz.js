export default function createQuizData(jsonData){
    const questions = jsonData.results.map((question, index) => {
        const options = [...question.incorrect_answers, question.correct_answer]; // creates an array of all possible answers
        const shuffledOptions = options.sort(() => Math.random() - 0.5); // shuffles the answers
        return {
            qNo: index + 1,
            question: question.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&eacute;/g, "é").replace(/&shy;/g, "-").replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&rsquo;/g, "'").replace(/&ntilde;/g, "ñ").replace(/&aacute;/g, "á").replace(/&euml;/g, "ë").replace(/&uuml;/g, "ü").replace(/&ouml;/g, "ö").replace(/&iacute;/g, "í").replace(/&oacute;/g, "ó").replace(/&auml;/g, "ä"),
            options: shuffledOptions,
            correctAnswer: question.correct_answer,
            selectedAnswer: ''
        }
    })
    return questions
}

