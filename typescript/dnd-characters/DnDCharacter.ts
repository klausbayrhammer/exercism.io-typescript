type AbilityValue = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18
type ModifierValue = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4

export class DnDCharacter {
    strength = DnDCharacter.generateAbilityScore();
    dexterity = DnDCharacter.generateAbilityScore();
    constitution = DnDCharacter.generateAbilityScore();
    intelligence = DnDCharacter.generateAbilityScore();
    wisdom = DnDCharacter.generateAbilityScore();
    charisma = DnDCharacter.generateAbilityScore();
    hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);

    static readonly #abilityModifierScore = new Map<AbilityValue, ModifierValue>([
        [3, -4],
        [4, -3],
        [5, -3],
        [6, -2],
        [7, -2],
        [8, -1],
        [9, -1],
        [10, 0],
        [11, 0],
        [12, 1],
        [13, 1],
        [14, 2],
        [15, 2],
        [16, 3],
        [17, 3],
        [18, 4]
    ]);

    static getModifierFor(abilityValue: AbilityValue): ModifierValue {
        return DnDCharacter.#abilityModifierScore.get(abilityValue) ?? 0;
    }

    static generateAbilityScore(): AbilityValue {
        const diceRolls = [
            DnDCharacter.#rollDice(),
            DnDCharacter.#rollDice(),
            DnDCharacter.#rollDice(),
            DnDCharacter.#rollDice()
        ];
        const lowestDice = Math.min(...diceRolls);
        const sumOfDice = diceRolls.reduce((a, b) => a + b);
        return sumOfDice - lowestDice as AbilityValue;
    }

    static #rollDice() {
        return Math.floor((Math.random() * 6) + 1);
    }
}
