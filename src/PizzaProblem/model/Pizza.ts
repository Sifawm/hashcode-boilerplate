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
    return this.slices.every(currentSlice => this.isSliceContained(slice, currentSlice));
  }

  isSliceContained(sliceA: Slice, sliceB: Slice): boolean {
        return false;
  }

  isSliceInBounds(slice: Slice): boolean {
    return slice.coordinateA.row < this.numOfRows
        && slice.coordinateB.row < this.numOfRows
        && slice.coordinateA.col < this.numOfColumns
        && slice.coordinateB.col < this.numOfColumns;
  }

  findAllValidSlicesForTheGivenMold(mold: Mold): Slice[] {
    return null; // TODO
  }
}