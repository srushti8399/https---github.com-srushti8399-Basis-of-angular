//Creating Abstract class
abstract class Emp{
    Fullname:string;
    Age:number;
    Address:string;
    Department:string;
    Gender:string;

// Creating a constructor
 constructor(name:string,year:number,add:string,dept:string,gen:string){
    this.Fullname=name;
    this.Age=year;
    this.Address=add;
    this.Department=dept;
    this.Gender=gen;
 } 
    abstract calculateAnnualSalary(number):number; 
    abstract displaydetails():void;
}
//creating  child classes
class TemporaryEmp extends Emp{
    PerDaySalary:number;
    constructor(namet:string,yeart:number,addt:string,deptt:string,gent:string,PerD:number){
        super(namet,yeart,addt,deptt,gent);
        this.PerDaySalary=PerD;
    }
    calculateAnnualSalary(Perd:number):number{
        let Ann:number= Perd*365;
        console.log("Annual Salary of Temperory employee :" +Ann);
        return Ann;

    }
    displaydetails():void{
        console.log("Details of temporary employee are: ");
        console.log("Name:" +this.Fullname);
        console.log("Age:" +this.Age);
        console.log("Address:"+this.Address);
        console.log("Gender: " + this.Gender);
    

    }

}
// Creating Class for permanent employee

class PermanentEmp extends Emp{
    Salary:number;
    constructor(namet:string,yeart:number,addt:string,deptt:string,gent:string,Sal:number){
        super(namet,yeart,addt,deptt,gent);
        this.Salary=Sal;
    }
    calculateAnnualSalary(Sald:number):number{
        let Ann1:number= Sald*12;
        console.log("Annual Salary of Permanent employee :" +Ann1);
        return Ann1;

    }
    displaydetails():void{
        console.log("Details of Permanent employee are: ");
        console.log("Name:" +this.Fullname);
        console.log("Age:" +this.Age);
        console.log("Address:"+this.Address);
        console.log("Gender: " + this.Gender);
    

    }

}
let per=new TemporaryEmp("Jack",23,"US","HR","Male",1200);
let per1=new PermanentEmp("Mary",30,"UK","Management","Female",60000);
per.displaydetails();
per.calculateAnnualSalary(1200);
per1.displaydetails();
per1.calculateAnnualSalary(60000);
