var Algebra = /** @class */ (function () {
    function Algebra() {
    }
    Algebra.prototype.Add = function (a, b, c) {
        if (c === void 0) { c = 3; }
        return a + b + c;
    };
    Algebra.prototype.Multiply = function (c, d) {
        return c * d;
    };
    return Algebra;
}());
;
var sum = new Algebra();
var result = sum.Add(23, 34);
console.log(result);
var answer = sum.Multiply(4, 6);
console.log(answer);
