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
//Creating Abstract class
var Emp = /** @class */ (function () {
    // Creating a constructor
    function Emp(name, year, add, dept, gen) {
        this.Fullname = name;
        this.Age = year;
        this.Address = add;
        this.Department = dept;
        this.Gender = gen;
    }
    return Emp;
}());
//creating  child classes
var TemporaryEmp = /** @class */ (function (_super) {
    __extends(TemporaryEmp, _super);
    function TemporaryEmp(namet, yeart, addt, deptt, gent, PerD) {
        var _this = _super.call(this, namet, yeart, addt, deptt, gent) || this;
        _this.PerDaySalary = PerD;
        return _this;
    }
    TemporaryEmp.prototype.calculateAnnualSalary = function (Perd) {
        var Ann = Perd * 365;
        console.log("Annual Salary of Temperory employee :" + Ann);
        return Ann;
    };
    TemporaryEmp.prototype.displaydetails = function () {
        console.log("Details of temporary employee are: ");
        console.log("Name:" + this.Fullname);
        console.log("Age:" + this.Age);
        console.log("Address:" + this.Address);
        console.log("Gender: " + this.Gender);
    };
    return TemporaryEmp;
}(Emp));
// Creating Class for permanent employee
var PermanentEmp = /** @class */ (function (_super) {
    __extends(PermanentEmp, _super);
    function PermanentEmp(namet, yeart, addt, deptt, gent, Sal) {
        var _this = _super.call(this, namet, yeart, addt, deptt, gent) || this;
        _this.Salary = Sal;
        return _this;
    }
    PermanentEmp.prototype.calculateAnnualSalary = function (Sald) {
        var Ann1 = Sald * 12;
        console.log("Annual Salary of Permanent employee :" + Ann1);
        return Ann1;
    };
    PermanentEmp.prototype.displaydetails = function () {
        console.log("Details of Permanent employee are: ");
        console.log("Name:" + this.Fullname);
        console.log("Age:" + this.Age);
        console.log("Address:" + this.Address);
        console.log("Gender: " + this.Gender);
    };
    return PermanentEmp;
}(Emp));
var per = new TemporaryEmp("Jack", 23, "US", "HR", "Male", 1200);
var per1 = new PermanentEmp("Mary", 30, "UK", "Management", "Female", 60000);
per.displaydetails();
per.calculateAnnualSalary(1200);
per1.displaydetails();
per1.calculateAnnualSalary(60000);
