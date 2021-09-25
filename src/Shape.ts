import { Point } from "./Point";

export abstract class Shape {
    constructor(points: Point[]);
    constructor(points: Point[], color: string, filled: boolean);
    constructor(protected points: Point[], protected color?: string, protected filled?: boolean) {
        if (!this.color && !this.filled) {
            this.color = 'green';
            this.filled = true
        }
        if (this.points.length < 3) {
            throw new Error("Shape has to have at least 3 points")
        }
    }
    toString(): string {
        const pointList = this.points.reduce((acc, point) => (acc + `(${point.x}, ${point.y}), `), 'Points: ').replace(/, $/, ".")
        return `A Shape with color of ${this.color} and ${this.filled ? '' : 'not '}filled. ${pointList}`
    }
    getPerimeter(): number {
        return this.points.reduce((acc, point, index) => {
            if(index === this.points.length - 1) {
                return acc + point.distance(this.points[0])
            } else {
                return acc + point.distance(this.points[index + 1])
            }
        }, 0)
    }
    abstract getType(): string;
}
