export class Squares {
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  constructor(count: number) {
    const arrayOfIndices = Array(count).fill(0)
        .map((_, index) => index + 1)

    this.squareOfSum = Math.pow(arrayOfIndices.reduce((a, b) => a+b), 2);

    this.sumOfSquares = arrayOfIndices.reduce((a, b) => a + b*b);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}
