type LegacyScrabbleScores = Record<string, string[]>;
type ScrabbleScores = Record<string, number>

export function transform(legacyScrabbleScores: LegacyScrabbleScores): ScrabbleScores {
  return Object.fromEntries(
      Object.entries(legacyScrabbleScores)
          .flatMap(([score, characters]) =>
              characters.map(character => [character.toLocaleLowerCase(), Number(score)])
          )
  );
}
