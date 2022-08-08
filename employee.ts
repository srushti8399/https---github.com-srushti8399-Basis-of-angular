class Employee{
    public firstname:string;
    public middlename:string;
    public lastname:string;
    public age:number;
    public department:string;
    public gender:string;
    public address:string;
    public pincode:number;
    public mobilenumber:number;
   constructor(fname:string,mname:string,lname:string,ages:number,dname:string,gname:string,add:string,pcode:number,mno:number){
    this.firstname=fname;
    this.middlename=mname;
    this.lastname=lname;
    this.age=ages;
    this.department=dname;
    this.gender=gname;
    this.address=add;
    this.pincode=pcode;
    this.mobilenumber=mno;
   }
   public getPersonalDetails():void{
    console.log("Basics details:");
    console.log("Name:", this.firstname + " " + this.middlename +" "+ this.lastname);
    console.log("Age:",this.age);
    console.log("Gender:",this.gender);
    console.log("Contact:",this.mobilenumber);


    
    
   }
   public getContactDetails():void{
    console.log("Contact Details:");
    console.log("Department:", this.department);
    console.log("Pin code:", this.pincode);
    console.log("Address:", this.address);

   }
}
const emp=new Employee("srushti","Sanjay","Deshpande",22,"Technical","Female","Akola",444002,123456789);
emp.getPersonalDetails();
emp.getContactDetails();