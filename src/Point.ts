export class Point {
    x: number;
    y: number;
    constructor();
    constructor(x ,y);
    constructor(x = 0,y = 0) {
        this.x = x;
        this.y = y;
    }
    toString(): string {
        return `(${this.x}, ${this.y})`;
    }
    distance(): number;
    distance(x,y): number;
    distance(other: Point): number;
    distance(instance?, y?) {
        let pointX = 0;
        let pointY = 0;
        if (instance instanceof Point) {
            pointX = instance.x;
            pointY = instance.y;
        } else if (typeof instance === 'number' ) {
            pointX = instance;
            pointY = y;
        }
        return Math.round(1000 * Math.sqrt(Math.pow(Math.abs(this.x - pointX), 2) + Math.pow(Math.abs(this.y - pointY), 2))) / 1000
    }
}
