var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(length) {
        this.Length = length;
    }
    return Shape;
}());
var Calculate = /** @class */ (function (_super) {
    __extends(Calculate, _super);
    function Calculate(Length) {
        return _super.call(this, Length) || this;
    }
    Calculate.prototype.GetName = function () {
        return this.Length;
    };
    Calculate.prototype.CalculateSquareArea = function (Len) {
        this.Length = Len;
        var areaofsquare = Len * Len;
        console.log("Area of Square=" + areaofsquare);
    };
    Calculate.prototype.CalculatecircleArea = function (Len) {
        this.Length = Len;
        var areaofcircle = Calculate.pi * Len * Len;
        console.log("Area of Circle=" + areaofcircle);
    };
    Calculate.pi = 3.14;
    return Calculate;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(Length) {
        return _super.call(this, Length) || this;
    }
    Rectangle.prototype.GetName = function () {
        return this.Length;
    };
    Rectangle.prototype.calculaterectanglearea = function (Len1, Breadth) {
        this.Length = Len1;
        var areaofrectangle = Len1 * Breadth;
        console.log("Area of Rectangle=" + areaofrectangle);
    };
    return Rectangle;
}(Shape));
var obj = new Calculate(5);
var obj1 = new Rectangle(6);
obj.CalculateSquareArea(6);
obj.CalculatecircleArea(9);
obj1.calculaterectanglearea(5, 7);
