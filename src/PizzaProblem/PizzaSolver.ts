import { ProblemSolver } from "../utils/ProblenSolver";

interface Size{
  rows: number;
  cols: number;
  cells: number;
}

export class PizzaSolver extends ProblemSolver {
  private pizza: Array<Array<string>> = [];
  private r: number;
  private c: number;
  private l: number;
  private h: number;
  private validSizes: Array<Size> = [];

  public parseInput(){
    const parameters: string = this.fileScanner.nextLine();
    const values: Array<string> = parameters.split(" ");

    this.r = +values[0];
    this.c = +values[1];
    this.l = +values[2];
    this.h = +values[3];

    for (let i = 0 ; i < this.r ; ++i){
      const line: string = this.fileScanner.nextLine();
      const arrayOfChar = line.split("");
      this.pizza.push(arrayOfChar);
    }

    this.validSizes = this.obtainSizes();
  }

  private obtainSizes(){
    const result: Array<Size> =  [];
    for (let i = 1 ; i <= this.r ; ++i) {
      for (let j = 1 ; j <= this.c; ++j){
        if ((i * j >= this.l * 2) && (i * j <= this.h)) {
            const size: Size = {
              rows: i,
              cols: j,
              cells: i * j,
            };
            result.push(size);
        }
      }
    }
    result.sort((a, b) => a.cells > b.cells ? -1 : 1);
    return result;
  }
  public solve(){
    console.log("input", this);
  }
}
