type AlphameticsSolution = Record<string, number>;

export function solve(puzzle: string): AlphameticsSolution {
    const {summands, result} = parseExpression(puzzle);
    const summandDigitsWithMultipliers = groupDigitsWithMultipliers(summands);
    const resultDigitsWithMultipliers = groupDigitsWithMultipliers([result]);
    const keys = new Set([...summandDigitsWithMultipliers.keys()].concat([... resultDigitsWithMultipliers.keys()]));
    // TODO
}


type EncodedNumber = string;
type ParsedExpression = {
    summands: EncodedNumber[];
    result: EncodedNumber;
}
type GroupedDigitsAndMultipliers = Map<string, number>;

function groupDigitsWithMultipliers(numbersAsCodedStrings: EncodedNumber[]): GroupedDigitsAndMultipliers {
    return numbersAsCodedStrings
        .flatMap(encodedString => [... encodedString]
            .reverse()
            .map((digit, index) => ({digit, multiplier: Math.pow(10, index)})))
        .reduce((agg: GroupedDigitsAndMultipliers, {digit, multiplier}) => {
            let newMultiplier;
            if(agg.has(digit)) {
                newMultiplier = agg.get(digit)! + multiplier
            } else {
                newMultiplier = multiplier;
            }
            agg.set(digit, newMultiplier);
            return agg;
        }, new Map())
}

describe('groupDigitsWithMultipliers', () => {
    it('groups single values', () => {
        expect(groupDigitsWithMultipliers(['A'])).toEqual(new Map([['A', 1]]))
    })
    it('groups two digit values', () => {
        expect(groupDigitsWithMultipliers(['AA'])).toEqual(new Map([['A', 11]]))
    })
    it('groups two different two digit values', () => {
        expect(groupDigitsWithMultipliers(['AB', 'AB'])).toEqual(new Map([['B', 2],['A', 20]]))
    })
})

function parseExpression(expression: string): ParsedExpression {
    const [summandsAsString, result] = expression
        .replace(/ /g, '',)
        .split('==')
    const summands = summandsAsString.split('+');
    return {summands, result};
}

describe('parse expressions', () => {
    it('parses an expression with only one summand and one result', () => {
        expect(parseExpression('A == B')).toEqual({summands: ['A'], result: 'B'})
    })
    it('parses an expression with two summands and one result', () => {
        expect(parseExpression('AA + B == C')).toEqual({summands: ['AA', 'B'], result: 'C'})
    })
})
