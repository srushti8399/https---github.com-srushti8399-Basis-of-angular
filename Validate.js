var Employee1 = /** @class */ (function () {
    function Employee1(name1, add, pcode, ages) {
        this.name = name1;
        this.address = add;
        this.pincode = pcode;
        this.age = ages;
    }
    Employee1.prototype.getname = function () {
        return this.name;
    };
    Employee1.prototype.setname = function (name) {
        var nm = name;
        try {
            if (nm == "" || nm == null) {
                throw new Error("invalid value");
            }
        }
        catch (exce) {
            console.log(exce.message);
        }
    };
    Employee1.prototype.getname1 = function () {
        return this.address;
    };
    Employee1.prototype.setname1 = function (address) {
        try {
            if (address == "" || address == null) {
                throw new Error("invalid value");
            }
        }
        catch (exce) {
            console.log(exce.message);
        }
    };
    Employee1.prototype.getname2 = function () {
        return this.pincode;
    };
    Employee1.prototype.setname2 = function (pincode) {
        try {
            if (pincode == "" || pincode == null || pincode.length > 6) {
                throw new Error("invalid value");
            }
        }
        catch (exce) {
            console.log(exce.message);
        }
    };
    Employee1.prototype.getname3 = function () {
        return this.age;
    };
    Employee1.prototype.setname3 = function (age) {
        try {
            if (age < 0 || age == null || age > 100) {
                throw new Error("invalid value");
            }
        }
        catch (exce) {
            console.log(exce.message);
        }
    };
    return Employee1;
}());
var emp1 = new Employee1("Srushti", "Akola", "123456", 25);
console.log(emp1.getname());
console.log(emp1.getname1());
console.log(emp1.getname2());
console.log(emp1.getname3());
emp1.setname("");
emp1.setname1("");
emp1.setname2("");
emp1.setname3(1000);
