import { FileScanner } from "./FileScanner";

export abstract class ProblemSolver {
  public fileScanner: FileScanner;

  constructor(
    private inputFile: string,
    private outputFile?: string,
  ) {
    this.fileScanner = new FileScanner(this.inputFile);
  }

  abstract parseInput();
  abstract solve();
}