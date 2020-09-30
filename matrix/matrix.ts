type RawMatrixInput = string
type Rows = number[][];
type Columns = number[][];

class Matrix {
    public rows: Rows;
    public columns: Columns;

    constructor(rawMatrix: RawMatrixInput) {
        this.rows = rawMatrix.split('\n').map(row => row.split(' ').map((Number)))
        this.columns = this.rows[0].map((_, index) => this.rows.map(row => row[index]));
    }
}

export default Matrix
