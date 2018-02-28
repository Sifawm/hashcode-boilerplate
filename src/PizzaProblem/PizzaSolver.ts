import { ProblemSolver } from "../utils/ProblenSolver";

export class PizzaSolver extends ProblemSolver {
  private pizza: Array<Array<number>> = [];
  private r: number;
  private c: number;
  private l: number;
  private h: number;

  public parseInput(){
    const parameters: string = this.fileScanner.nextLine();
    const values: Array<string> = parameters.split(" ");

    this.r = values[0];
    this.c = values[1];
    this.l = values[2];
    this.h = values[3];

    for (let i = 0 ; i < this.r ; ++i){
      const line: string = this.fileScanner.nextLine();
      const arrayOfChar = line.split("");
      this.pizza.push(arrayOfChar);
    }
  }

  public solve(){
    console.log("input",this);
  }

}
