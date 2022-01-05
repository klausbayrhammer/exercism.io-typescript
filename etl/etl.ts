type LegacyScrabbleScores = Record<string, string[]>;
type ScrabbleScores = Record<string, number>

export function transform(legacyScrabbleScores: LegacyScrabbleScores): ScrabbleScores {
  const scrabbleScore: ScrabbleScores = {};
  for (const [score, characters] of Object.entries(legacyScrabbleScores)) {
      characters.forEach(character => scrabbleScore[character.toLocaleLowerCase()] = Number(score));
  }
  return scrabbleScore;
}
