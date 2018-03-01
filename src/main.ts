import { argv } from "yargs";
import { SelfDrivenCarSolver } from "./SelfDrivenCarProblem/SelfDrivenCarSolver";
// console.log(argv.prueba);

const pizzaSolver = new SelfDrivenCarSolver("./src/SelfDrivenCarProblem/a_example.in");
pizzaSolver.parseInput();
pizzaSolver.solve();
