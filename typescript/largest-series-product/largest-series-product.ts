export const largestProduct = (inputSeries: string, span: number) => {
    if (span < 0) {
        throw new Error('Span must be greater than zero')
    }

    if (inputSeries.length < span) {
        throw new Error('Span must be smaller than string length')
    }

    if (/[^\d]/.test(inputSeries)) {
        throw new Error('Digits input must only contain digits')
    }

    if (inputSeries === '') {
        return 1
    }

    const chunks = Array(inputSeries.length - span + 1)
    const productOfChunks = Array
        .from(chunks, (_, i) => inputSeries.substring(i, i + span))
        .map(sequence => [...sequence].map(Number))
        .map(sequence => sequence.reduce((p, v) => p * v, 1))
    return Math.max(...productOfChunks)
}
