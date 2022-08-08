
// Creating a class employee1 to declare variables, methods
class Employee1{
    // Declaring Variables
    public name:string;
    public address:string;
    public pincode:string;
    public age:number;

    //Declaring Constructor and storing values

    constructor(name1:string,add:string,pcode:string,ages:number){
        this.name=name1;
        this.address=add;
        this.pincode=pcode;
        this.age=ages;

    }
    // Method to get name
    public getname():string{
        return this.name;
    }
    public setname(name:string):void{
        let nm=name;
        try{
            if(nm=="" ||nm==null){
                throw new Error("invalid value");
            }

        }
        catch(exce){
            console.log(exce.message);
        }
        
    }
    public getname1():string{
        return this.address;
    }
    public setname1(address:string):void{
        try{
            if(address=="" ||address==null){
                throw new Error("invalid value");
            }

        }
        catch(exce){
            console.log(exce.message);
        }
        
    }
    public getname2():string{
        return this.pincode;
    }
    public setname2(pincode:string):void{
        try{
            if(pincode=="" ||pincode==null || pincode.length >6){
                throw new Error("invalid value");
            }

        }
        catch(exce){
            console.log(exce.message);
        }
        
    }
    public getname3():number{
        return this.age;
    }
    public setname3(age:number):void{
        try{
            if(age<0 ||age==null || age >100){
                throw new Error("invalid value");
            }

        }
        catch(exce){
            console.log(exce.message);
        }
        
    }
}
const emp1=new Employee1("Srushti","Akola","123456",25);
 console.log(emp1.getname());
 console.log(emp1.getname1());
 console.log(emp1.getname2());
 console.log(emp1.getname3());
emp1.setname("");
emp1.setname1("");
emp1.setname2("");
emp1.setname3(1000);