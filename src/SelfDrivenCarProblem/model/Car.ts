import { Point } from "./Point";
import { Ride } from "./Ride";

export class Car {
  public position: Point = new Point(0, 0);
  public rides: Ride[] = [];
  public currentStep: number = 0;

  constructor(public index: number) {}

  getBestRide(rides: Ride[]) {
    return rides.reduce((bestRide, currentRide) => {
      return this.getPointsForAGivenRide(bestRide) > this.getPointsForAGivenRide(currentRide) ? bestRide : currentRide;
    });
  }

  getPointsForAGivenRide(ride: Ride) {
    let points = 0;
    if (this.canFinishRide(ride)) {
      points = ride.getTotalDistance() + this.winsBonus(ride);
    }

    return points;
  }

  canFinishRide(ride: Ride) {
    return this.currentStep + this.position.distance(ride.startingPoint) < ride.latestFinish - 1;
  }

  winsBonus(ride: Ride) {
    return this.position.distance(ride.startingPoint) <= (ride.earlyStart - this.currentStep) ? ride.bonus : 0;
  }
}