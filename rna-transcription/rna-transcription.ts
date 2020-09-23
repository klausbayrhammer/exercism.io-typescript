const dnaToRnaMapping:Record<string, string> = {
    "C": "G",
    "G": "C",
    "A": "U",
    "T": "A",
};

class Transcriptor {
    toRna(dnaStrand: string): string {
        return dnaStrand.split("").map(mapDnaToRna).join("");

    }
}

function mapDnaToRna(dna: string): string {
    const rna = dnaToRnaMapping[dna];
    if (!rna) {
        throw new Error('Invalid input DNA.');
    }
    return rna;
}

export default Transcriptor