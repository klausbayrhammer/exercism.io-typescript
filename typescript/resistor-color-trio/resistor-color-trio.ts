const ResistorColorMapping = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
} as const;

const MetricPrefix = [
    {minimumValue: 10 ** 9, description: "gigaohms"},
    {minimumValue: 10 ** 6, description: "megaohms"},
    {minimumValue: 10 ** 3, description: "kiloohms"},
    {minimumValue: 1, description: "ohms"},
];

type ResistorColor = keyof typeof ResistorColorMapping;

export function decodedResistorValue(colors: [ResistorColor, ResistorColor, ResistorColor]): string {
    const [firstColor, secondColor, numberOfZeros] = colors.map(color => ResistorColorMapping[color]);
    const resistorValue = (firstColor * 10 + secondColor) * Math.pow(10, numberOfZeros);
    const matchingPrefix = MetricPrefix.find(({minimumValue}) => resistorValue >= minimumValue);
    if (matchingPrefix) {
        return `${resistorValue / matchingPrefix.minimumValue} ${matchingPrefix.description}`;
    }
    return `${resistorValue} ohms`;
}
