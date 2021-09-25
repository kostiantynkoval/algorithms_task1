import { Shape } from './Shape';
import { Point } from "./Point";

export class Triangle extends Shape {
    protected points: Point[];
    constructor(point1: Point,point2: Point,point3: Point);
    constructor(point1: Point,point2: Point,point3: Point, color: string, filled: boolean);
    constructor(
        private point1: Point,
        private point2: Point,
        private point3: Point,
        protected color?: string,
        protected filled?: boolean
    ) {
        super([point1, point2,point3], color, filled)
    }
    toString(): string {
        return this.points
        .reduce((acc, point, index) =>
            (acc + `v${index + 1}=(${point.x}, ${point.y}),`), 'Triangle[')
        .replace(/.$/, "]")
    }
    getType(): string {
        const is1Equals2 = this.point1.distance(this.point2) === this.point2.distance(this.point3);
        const is3Equals2 = this.point3.distance(this.point1) === this.point2.distance(this.point3);
        switch ( true ) {
            case (
                is1Equals2 &&
                is3Equals2
            ):
                return "equilateral triangle";
            case (
                is1Equals2 ||
                is3Equals2 ||
                this.point3.distance(this.point1) === this.point1.distance(this.point2)
            ):
                return "isosceles triangle";
            default:
                return "scalene triangle";
        }
    }
}
