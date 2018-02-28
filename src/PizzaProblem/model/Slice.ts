export interface Coordinate {
  row: number;
  col; number;
}
export class Slice {
  constructor(
    public coordinateA: Coordinate,
    public coordinateB: Coordinate,
    public numberOfCells: number,
  ) {}

  get width() {
    return Math.abs(this.coordinateB.col - this.coordinateA.col);
  }

  get height() {
    return Math.abs(this.coordinateB.row - this.coordinateA.row);
  }
}