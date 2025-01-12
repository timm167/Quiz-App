import { numberOfQuestions } from '../content/content.json';

export function endMessage(score) {
    if (score === numberOfQuestions) {
        return 'You should find something better to do with your time.'
    } else if (score > numberOfQuestions*0.75) {
        return `I bet you're used to being second best.`
    } else if (score <= numberOfQuestions*0.75) {
        return 'Not bad! Not very good either.'
    } else if (score <= numberOfQuestions*0.6) {
        return `That's almost as smart as the average 12 year old!`
    } else if (score <= numberOfQuestions*0.4) {
        return `You're not exactly Einstein, are you?`
    } else if (score <= numberOfQuestions*0.24) {
        return 'A monkey with a keyboard would have done better :('
    }
}