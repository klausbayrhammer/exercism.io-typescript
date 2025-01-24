export class Triangle {
    private sides: number[];

    constructor(...sides: number[]) {
        this.sides = sides;
    }

    get isEquilateral() {
        return this.#checkTriangleShape((a, b, c) => a === b && b === c);
    }

    get isIsosceles() {
        return this.#checkTriangleShape((a, b, c) => a === b || b === c || a === c);
    }

    get isScalene() {
        return this.#checkTriangleShape((a, b, c) => a !== b && b !== c && a !== c);
    }

    #checkTriangleShape(condition: (a: number, b: number, c: number) => boolean) {
        const [a, b, c] = this.sides.sort()
        const isInvalidTriangle = a === 0 || a + b < c;
        if(isInvalidTriangle) {
            return false;
        }
        return condition(a, b, c);
    }
}
