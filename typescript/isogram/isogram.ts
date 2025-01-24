export function isIsogram(potentialIsogram: string): boolean {
    const sanitizedInput = [...potentialIsogram
        .toLowerCase()
        .replace(/[^\w]/, '')
    ];
    return sanitizedInput.every((e, index) => !sanitizedInput.includes(e, index + 1));
}
