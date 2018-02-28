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
}