const ALL_PANGRAM_RELEVANT_CHARACTERS = 'abcdefghijklmnopqurstuvwxyz';

export default class {
    private sentence: string;

    constructor(sentence: string) {
        this.sentence = sentence.toLowerCase();
    }

    isPangram() {
        return [... ALL_PANGRAM_RELEVANT_CHARACTERS].every(character => this.sentence.includes(character));
    }
}