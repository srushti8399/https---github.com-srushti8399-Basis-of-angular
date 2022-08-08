// creating a class Square which implements interface shapes
var Squares = /** @class */ (function () {
    function Squares() {
    }
    Squares.prototype.getArea = function (s) {
        return s * s;
    };
    return Squares;
}());
//Creating a class Circle which implements interface shapes
var Circles = /** @class */ (function () {
    function Circles() {
    }
    Circles.prototype.getArea = function (s) {
        return 3.14 * s * s;
    };
    return Circles;
}());
//Creating class Rectangles which implements interface shapes
var Rectangles = /** @class */ (function () {
    function Rectangles(h, w) {
        this.height = h;
        this.width = w;
    }
    Rectangles.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Rectangles;
}());
var si = new Squares();
var cir = new Circles();
var rec = new Rectangles(34, 23);
console.log(si.getArea(23));
console.log(cir.getArea(21));
console.log(rec.getArea());
