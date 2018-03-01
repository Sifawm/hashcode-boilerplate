export class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}

  distance(point: Point): number {
    return Math.abs(this.x - point.x) + Math.abs(this.y - point.y);
  }
}