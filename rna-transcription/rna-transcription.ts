const dnaToRnaMapping:Record<string, string> = {
    "C": "G",
    "G": "C",
    "A": "U",
    "T": "A",
};

class Transcriptor {
    toRna(dnaStrand: string): string {
        return dnaStrand.split("").map(dna => {
            const rna = dnaToRnaMapping[dna];
            if(!rna) {
                throw new Error('Invalid input DNA.');
            }
            return rna;
        }).join("");
    }
}

export default Transcriptor