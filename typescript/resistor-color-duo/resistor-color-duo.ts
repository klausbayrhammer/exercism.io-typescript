const color_to_resitor_map: Record<string, string> = {
    'black': '0',
    'brown': '1',
    'red': '2',
    'orange': '3',
    'yellow': '4',
    'green': '5',
    'blue': '6',
    'violet': '7',
    'grey': '8',
    'white': '9',
};

export class ResistorColor {
    private colors: string[];

    constructor(colors: string[]) {
        if(colors.length === 1) {
            throw new Error('At least two colors need to be present');
        }
        this.colors = colors.slice(0,2);
    }

    value(): number {
        const listOfResitorValues = this.colors.map(color => color_to_resitor_map[color]);
        const resistorValue = listOfResitorValues.join('');
        return parseInt(resistorValue);
    }
}
