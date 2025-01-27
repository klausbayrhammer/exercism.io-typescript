const CHARCODE_FIRST_LETTER = "a".charCodeAt(0);
const NUMBER_OF_LETTERS = 26;

export class SimpleCipher {
    constructor(public key = SimpleCipher.#generateKey()) {
    }

    static #generateKey() {
        const defaultKeyLength = 100;
        return Array(defaultKeyLength).fill(0).map(SimpleCipher.#createRandomCharFromAlphabet).join('');
    }

    static #createRandomCharFromAlphabet(): string {
        return String.fromCharCode(Math.floor(Math.random() * NUMBER_OF_LETTERS) + CHARCODE_FIRST_LETTER);
    }

    encode(message: string): string {
        const encodeFunction = (letter: number, secret: number) => letter + secret;
        return this.#encodeDecode(message, encodeFunction);
    }

    decode(encodedMessage: string): string {
        const decodeFunction = (letter: number, secret: number) => letter - secret;
        return this.#encodeDecode(encodedMessage, decodeFunction);
    }

    #encodeDecode(message: string, p: (letter: number, secret: number) => number): string {
        return message.split('').map((letter, index) => {
            const secret = this.key.charCodeAt(index % this.key.length) - CHARCODE_FIRST_LETTER;
            const encodedOrDecodedCharWithPotentialWrap = p(letter.charCodeAt(0) - CHARCODE_FIRST_LETTER, secret);
            const indexOfCharInAlphabet = (encodedOrDecodedCharWithPotentialWrap + NUMBER_OF_LETTERS) % NUMBER_OF_LETTERS;
            return String.fromCharCode(indexOfCharInAlphabet + CHARCODE_FIRST_LETTER);
        }).join("");
    }
}
