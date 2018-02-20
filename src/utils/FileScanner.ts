import * as fs from "fs";

export class FileScanner {
  lines: string[];
  currentLine: number = 0;

  constructor(
    private inputFile: string,
  ) {
    const fileContent = fs.readFileSync(this.inputFile, "utf8");
    this.lines = fileContent.split("\n");
  }

  static saveFile(outputFileName: string, data: string) {
    fs.writeFileSync(outputFileName, data, "utf8");
  }

  static saveLines(outputFileName: string, lines: string[]) {
    const data = lines.join("\n");
    FileScanner.saveFile(outputFileName, data);
  }

  hasNext() {
    return this.currentLine < this.lines.length;
  }

  nextLine(){
    return this.lines[this.currentLine++];
  }

  getLine(n: number = 0) {
    return this.lines[n];
  }

  nextLines(numberOfLines: number = 1) {
    const linesToReturn = this.lines.slice(this.currentLine, numberOfLines);
    this.currentLine += numberOfLines;

    return linesToReturn;
  }
}