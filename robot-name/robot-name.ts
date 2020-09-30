type Name = string;

export default class RobotName {
    private usedNames = new Set<Name>();
    public name: Name = this.useNewName();

    resetName(): void {
        this.name = this.useNewName();
    }

    useNewName(): Name {
        const nextName = generateName();
        if(this.usedNames.has(nextName)) {
            return this.useNewName();
        }
        this.usedNames.add(nextName);
        return nextName;
    }
}
function generateName() {
    return [
        pickRandomAlphabeticChar(),
        pickRandomAlphabeticChar(),
        pickRandomNumericChar(),
        pickRandomNumericChar(),
        pickRandomNumericChar(),
    ].join("")
}

function pickRandomAlphabeticChar() {
    return pickRandomValueOfString('ABCDEFGEHIJKLMNOPQRSTUVWXYZ');
}

function pickRandomNumericChar() {
    return pickRandomValueOfString('0123456789');
}

function pickRandomValueOfString(array: string) {
    return array[Math.floor(Math.random() * array.length)];
}
