const LETTER_VALUES = [
        {letters: 'AEIOULNRST', letterValue: 1},
        {letters: 'DG', letterValue: 2},
        {letters: 'BCMP', letterValue: 3},
        {letters: 'FHVWY', letterValue: 4},
        {letters: 'K', letterValue: 5},
        {letters: 'JX', letterValue: 8},
        {letters: 'QZ',letterValue: 10},
    ]

export function score(input = "") {
    return input.toUpperCase()
        .split('')
        .map(char => LETTER_VALUES.find(({letters, letterValue}) => letters.includes(char))?.letterValue ?? 0)
        .reduce((a, b) => a + b, 0)
}
