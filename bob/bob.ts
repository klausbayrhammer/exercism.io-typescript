type Phrase = string;
type Response = string;

export default class {
    hey(phrase: Phrase): Response {
        if (forcefulQuestion(phrase)) {
            return `Calm down, I know what I'm doing!`
        }
        if (shouting(phrase)) {
            return 'Whoa, chill out!'
        }
        if (question(phrase)) {
            return 'Sure.'
        }
        if (silence(phrase)) {
            return 'Fine. Be that way!'
        }
        return 'Whatever.'
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