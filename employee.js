var Employee = /** @class */ (function () {
    function Employee(fname, mname, lname, ages, dname, gname, add, pcode, mno) {
        this.firstname = fname;
        this.middlename = mname;
        this.lastname = lname;
        this.age = ages;
        this.department = dname;
        this.gender = gname;
        this.address = add;
        this.pincode = pcode;
        this.mobilenumber = mno;
    }
    Employee.prototype.getPersonalDetails = function () {
        console.log("Basics details:");
        console.log("Name:", this.firstname + " " + this.middlename + " " + this.lastname);
        console.log("Age:", this.age);
        console.log("Gender:", this.gender);
        console.log("Contact:", this.mobilenumber);
    };
    Employee.prototype.getContactDetails = function () {
        console.log("Contact Details:");
        console.log("Department:", this.department);
        console.log("Pin code:", this.pincode);
        console.log("Address:", this.address);
    };
    return Employee;
}());
var emp = new Employee("srushti", "Sanjay", "Deshpande", 22, "Technical", "Female", "Akola", 444002, 123456789);
emp.getPersonalDetails();
emp.getContactDetails();
