import { Point } from "./Position";

export class Ride {
  startingPoint: Point;
  endingPoint: Point;
  earlyStart: number;
  latestFinish: number;

  constructor(a: number, b: number, x: number, y: number, s: number, f: number) {
    this.startingPoint = { x: a, y: b };
    this.endingPoint = { x, y };
    this.earlyStart = s;
    this.latestFinish = f;
  }
}