import { Slice, Coordinate } from "./Slice";
import { Mold } from "./Mold";

export class Pizza {

  constructor(
    public cells: string[][],
    public slices?: Slice[],
  ) {
    if (!this.slices) {
      this.slices = [];
    } else {
      this.slices = [...this.slices];
    }
  }

  get numOfColumns(): number {
    return this.cells[0].length;
  }

  get numOfRows(): number {
    return this.cells.length;
  }

  isSliceOverlapping(slice: Slice): boolean {
    return this.slices.some(currentSlice => currentSlice.overlaps(slice));
  }

  isSliceInBounds(slice: Slice): boolean {
    return slice.coordinateA.row < this.numOfRows
        && slice.coordinateB.row < this.numOfRows
        && slice.coordinateA.col < this.numOfColumns
        && slice.coordinateB.col < this.numOfColumns;
  }

  findAllValidSlicesForTheGivenMold(mold: Mold): Slice[] {
    const validSlices: Slice[] = [];

    for (let row = 0; row < this.cells.length; row++) {
      for (let col = 0; col < this.cells[0].length; col++) {
        const newCoordinate: Coordinate = { row, col };
        const newSlice = this.getSliceFromMold(mold, newCoordinate);
        if (this.isSliceInBounds(newSlice) && !this.isSliceOverlapping(newSlice)) {
          validSlices.push(newSlice);
        }
      }
    }

    return validSlices;
  }

  getSliceFromMold(mold: Mold, coordinate: Coordinate): Slice {
    const coordinateA = { ...coordinate };
    const coordinateB: Coordinate = {
      row: mold.rows + coordinate.row - 1,
      col: mold.cols + coordinate.col - 1,
    };

    return new Slice(coordinateA, coordinateB, mold.cells);
  }
}