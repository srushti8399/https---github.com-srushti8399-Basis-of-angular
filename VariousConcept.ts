abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person { 
    
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find('Steve');
//Inheritance
//Base Class
class Car {   
    Color:string     
    constructor(color:string) {   
       this.Color = color  
    }   
 } 
 // Child Class  
 class Audi extends Car {   
     Price: number  
     constructor(color: string, price: number) {  
         super(color);  
         this.Price = price;  
     } 
      static val="Car"; 
     display():void {  
        console.log(Audi.val);
         console.log("Color of Audi car: " + this.Color);  
         console.log("Price of Audi car: " + this.Price);  
     }  
 }  
 let obj = new Audi(" Black", 8500000 );  //creating an object
 obj.display();  //Calling a method