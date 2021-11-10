const PROTEIN_TO_CORDON = [
    {protein: 'Methionine', cordons: ['AUG']},
    {protein: 'Tryptophan', cordons: ['UGG']},
    {protein: 'Phenylalanine', cordons: ['UUU', 'UUC']},
    {protein: 'Leucine', cordons: ['UUA', 'UUG']},
    {protein: 'Serine', cordons: ['UCU', 'UCC', 'UCA', 'UCG']},
    {protein: 'Tyrosine', cordons: ['UAU', 'UAC']},
    {protein: 'Cysteine', cordons: ['UGU', 'UGC']},
];

export function translate(rna: string): string[] | undefined {
    const proteinList = [];
    for(let i = 0; i < rna.length; i+=3) {
        const cordon = rna.substring(i, i+3);
        const protein= PROTEIN_TO_CORDON.find(({cordons}) => cordons.includes(cordon))?.protein;
        if(!protein) {
            break;
        }
        proteinList.push(protein)
    }
    return proteinList
}
