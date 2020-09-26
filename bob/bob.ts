export default class {
    hey(phrase: string): string {
        if (forcefulQuestion(phrase)) {
            return `Calm down, I know what I'm doing!`
        }
        if (shouting(phrase)) {
            return 'Whoa, chill out!'
        }
        if (question(phrase)) {
            return 'Sure.'
        }
        if(silence(phrase)) {
            return 'Fine. Be that way!'
        }
        return 'Whatever.'
    }
}

function forcefulQuestion(phrase: string): boolean {
    return shouting(phrase) && question(phrase);
}

function shouting(phrase: string): boolean {
    const containsAlphabeticLetters = /[a-z]/i.test(phrase);
    const phraseIsEqualToUppercasePhrase = phrase === phrase.toUpperCase();
    return phraseIsEqualToUppercasePhrase && containsAlphabeticLetters;
}

function question(phrase: string): boolean {
    return phrase.trim().endsWith('?');
}

function silence(phrase: string): boolean {
    return phrase.trim() === '';
}