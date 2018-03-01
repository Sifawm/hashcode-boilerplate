import { Point } from "./Point";
import { Car } from "./Car";

export class Ride {
  startingPoint: Point;
  endingPoint: Point;
  earlyStart: number;
  latestFinish: number;
  bonus: number;
  index: number;

  constructor(a: number, b: number, x: number, y: number, s: number, f: number, bonus: number, index: number) {
    this.startingPoint = new Point(a, b);
    this.endingPoint = new Point(x, y);
    this.earlyStart = s;
    this.latestFinish = f;
    this.bonus = bonus;
    this.index = index;
  }

  getTotalDistance() {
    return this.startingPoint.distance(this.endingPoint);
  }
}