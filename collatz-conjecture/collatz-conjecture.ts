export default class {
    static steps(value: number): number {
        if (value <= 0) {
            throw new Error('Only positive numbers are allowed')
        }
        return this.stepsRec(value, 0);
    }

    static stepsRec(value: number, numherOfSteps: number): number {
        if (value === 1) {
            return numherOfSteps;
        }
        if (value % 2 === 0) {
            return this.stepsRec(value / 2, numherOfSteps + 1)
        }
        return this.stepsRec(3 * value + 1, numherOfSteps + 1)
    }
}
