const ArabicToRomanNumbers = [
    {arabic: 1, roman: 'I'},
    {arabic: 4, roman: 'IV'},
    {arabic: 5, roman: 'V'},
    {arabic: 9, roman: 'IX'},
    {arabic: 10, roman: 'X'},
    {arabic: 40, roman: 'XL'},
    {arabic: 50, roman: 'L'},
    {arabic: 90, roman: 'XC'},
    {arabic: 100, roman: 'C'},
    {arabic: 400, roman: 'CD'},
    {arabic: 500, roman: 'D'},
    {arabic: 900, roman: 'CM'},
    {arabic: 1000, roman: 'M'},
].sort((a, b) => b.arabic - a.arabic);

export const toRoman = (arabicNumber: number): string => {
    if (arabicNumber <= 0) {
        return '';
    }
    const {arabic, roman} = ArabicToRomanNumbers.find(arabicRomanPair => arabicRomanPair.arabic <= arabicNumber)!;
    return roman + toRoman(arabicNumber - arabic);
}
