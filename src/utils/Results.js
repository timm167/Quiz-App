const quizResponses = {}

export default function quizHandler(question) {
    quizResponses[question.qNo - 1] = [question]
    console.log(quizResponses)
}