import { Slice } from "./Slice";
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

  isSliceOverlapping(slice: Slice): boolean {
    return true;
  }

  isSliceInBounds(slice: Slice): boolean {
    return true;
  }

  findAllValidSliceForMold(mold: Mold): Slice[] {
    return null; // TODO
  }
}