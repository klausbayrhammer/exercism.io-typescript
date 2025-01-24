type Phrase = string;
type Response = string;

const responseStrategies = [
    {test: forcefulQuestion, response: `Calm down, I know what I'm doing!`},
    {test: shouting, response: 'Whoa, chill out!'},
    {test: question, response: 'Sure.'},
    {test: silence, response: 'Fine. Be that way!'}
]

export default class {
    hey(phrase: Phrase): Response {
        return responseStrategies.find(({test}) => test(phrase))?.response || 'Whatever';
    }
}

function forcefulQuestion(phrase: Phrase): boolean {
    return shouting(phrase) && question(phrase);
}

function shouting(phrase: Phrase): boolean {
    const containsAlphabeticLetters = /[a-z]/i.test(phrase);
    const phraseIsEqualToUppercasePhrase = phrase === phrase.toUpperCase();
    return phraseIsEqualToUppercasePhrase && containsAlphabeticLetters;
}

function question(phrase: Phrase): boolean {
    return phrase.trim().endsWith('?');
}

function silence(phrase: Phrase): boolean {
    return phrase.trim() === '';
}