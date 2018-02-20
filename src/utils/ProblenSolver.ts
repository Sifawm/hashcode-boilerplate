import { FileScanner } from "./utils/FileScanner";

export abstract class ProblemSolver {
  private fileScanner: FileScanner;

  constructor(
    private inputFile: string,
    private outputFile?: string,
  ) {
    this.fileScanner = new FileScanner(this.inputFile);
  }

  abstract parseInput();
  abstract solve();
}