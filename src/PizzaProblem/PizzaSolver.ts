import { ProblemSolver } from "../utils/ProblemSolver";
import { Node } from "../utils/Node";
import { Pizza } from "./model/Pizza";
import { Slice } from "./model/Slice";
import { Mold } from "./model/Mold";

export class PizzaSolver extends ProblemSolver {
  private pizza: Array<Array<string>> = [];
  private r: number;
  private c: number;
  private l: number;
  private h: number;
  private validMolds: Array<Mold> = [];
  private solutionTreeRoot: Node<Pizza>;

  public parseInput() {
    const parameters: string = this.fileScanner.nextLine();
    const values: Array<string> = parameters.split(" ");

    this.r = +values[0];
    this.c = +values[1];
    this.l = +values[2];
    this.h = +values[3];

    for (let i = 0; i < this.r; ++i) {
      const line: string = this.fileScanner.nextLine();
      const arrayOfChar = line.split("");
      this.pizza.push(arrayOfChar);
    }

    this.validMolds = this.obtainSizes();
  }

  private obtainSizes() {
    const result: Array<Mold> = [];
    for (let i = 1; i <= this.r; ++i) {
      for (let j = 1; j <= this.c; ++j) {
        if ((i * j >= this.l * 2) && (i * j <= this.h)) {
          const mold: Mold = {
            rows: i,
            cols: j,
            cells: i * j,
          };
          result.push(mold);
        }
      }
    }
    result.sort((a, b) => a.cells > b.cells ? -1 : 1);
    return result;
  }

  public solve() {
    const initialPizza = new Pizza(this.pizza);
    const rootNode = new Node<Pizza>(null, initialPizza);
    this.solutionTreeRoot = this.buildSolutionNode(rootNode);

    const solutions = this.getSolutionsFromSolutionTree(this.solutionTreeRoot);
    solutions.forEach(solution => {
      console.log(solution);
      console.log('----------------------');
    });
  }

  private buildSolutionNode(node: Node<Pizza>) {
    const pizza = node.data;
    this.validMolds.forEach(mold => {
      const validSlices: Slice[] = pizza.findAllValidSlicesForTheGivenMold(mold);
      validSlices.forEach(slice => {
        const childPizza = new Pizza(pizza.cells, [...pizza.slices, slice]);
        const childNode = new Node<Pizza>(node, childPizza);
        const builtChildNode = this.buildSolutionNode(childNode);
        node.children.push(builtChildNode);
      });
    });
    return node;
  }

  private getSolutionsFromSolutionTree(node: Node<Pizza>) {
    const solutions = [];
    if (node.children.length === 0) {
      solutions.push(node.data.slices);
    } else {
      node.children.forEach(child => {
        solutions.push(...this.getSolutionsFromSolutionTree(child));
      });
    }
    return solutions;
  }
}
