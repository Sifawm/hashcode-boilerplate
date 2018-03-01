import { ProblemSolver } from "../utils/ProblemSolver";
import { Ride } from "./model/Ride";
import { Car } from "./model/Car";
import { FileScanner } from "../utils/FileScanner";

export class SelfDrivenCarSolver extends ProblemSolver {

    private R: number;
    private C: number;
    private F: number;
    private N: number;
    private B: number;
    private T: number;

    private rides: Ride[] = [];
    private cars: Car[] = [];

    parseInput() {
        [this.R, this.C, this.F, this.N, this.B, this.T] = this.fileScanner.nextLine()
            .split(" ").map(l => +l);

        for (let i = 0; i < this.F; i++) {
            this.cars.push(new Car(i));
        }

        for (let i = 0; i < this.N; i++) {
            const [a, b, x, y, s, f] = this.fileScanner.nextLine().split(" ").map(l => +l);
            this.rides.push(new Ride(a, b, x, y, s, f, this.B, i));
        }
    }

    solve() {
        while (this.cars[0].currentStep < this.T && this.rides.length > 0) {
            this.cars[0].getBestRide(this.rides);
            this.cars = this.cars.sort((a, b) => {
                return a.currentStep - b.currentStep;
            });
        }

        let output: string = "";

        this.cars.forEach( car => {
            const rides = car.rides;
            output = rides.length + " ";
            rides.forEach( ride => {
                output = output + ride.index + " ";
            });
            output = output + "\n";
        });

        FileScanner.saveFile("output.txt", output);
    }

}