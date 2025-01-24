export class Anagram {
  constructor(private input: string) {}

  public matches(...potentials: string[]): string[] {
    return potentials.filter(potential => {
      const isSameWord = potential.toLowerCase() === this.input.toLowerCase();
      const isAnagram = sort(potential) === sort(this.input);
      return !isSameWord && isAnagram;
    })
  }

}
function sort(stringToSort: string): string {
  return [... stringToSort.toLowerCase()].sort().join();
}
