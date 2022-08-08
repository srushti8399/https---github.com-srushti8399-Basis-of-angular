var Student = /** @class */ (function () {
    function Student(names, gender, id, address) {
        this.address = place.Default;
        this.names = names;
        this.gender = gender;
        this.id = id;
        this.address = address;
    }
    return Student;
}());
;
var place;
(function (place) {
    place["UK"] = "UK";
    place["US"] = "US";
    place["India"] = "India";
    place["Default"] = "NA";
})(place || (place = {}));
var roll1 = new Student("Emiy", "Female", 23, "Default");
console.log(roll1);
