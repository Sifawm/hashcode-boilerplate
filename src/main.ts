import { argv } from "yargs";
import { PizzaSolver} from "./PizzaProblem/PizzaSolver";
// console.log(argv.prueba);

const pizzaSolver = new PizzaSolver("./src/PizzaProblem/input.txt");
pizzaSolver.parseInput();
pizzaSolver.solve();
