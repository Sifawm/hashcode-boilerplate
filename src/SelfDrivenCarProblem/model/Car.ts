import { Point } from "./Position";
import { Ride } from "./Ride";

export class Car {
  public position: Point = { x: 0, y: 0};
  public rides: Ride[] = [];
  public currentStep: number = 0;
}