type NucleotideCount = {
  A: number;
  C: number;
  G: number;
  T: number;
}

export function nucleotideCounts(strand: string): NucleotideCount {
  function countNucleotides(nucleotide: string): number {
    return [...strand].filter(e => e === nucleotide).length
  }
  
  if(strand.match(/[^ACGT]/)) {
    throw new Error('Invalid nucleotide in strand')
  }

  return {
    A: countNucleotides('A'),
    C: countNucleotides('C'),
    G: countNucleotides('G'),
    T: countNucleotides('T'),
  }
}
