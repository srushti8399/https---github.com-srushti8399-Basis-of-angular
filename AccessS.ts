class Student{
   public names:string;
   public gender:string;
   private id:number;
   address:string=place.Default;
   constructor(names:string,gender:string,id:number,address:string){
    this.names=names;
    this.gender=gender;
    this.id=id;
    this.address=address;

   }
};
enum place{
    UK="UK",
    US="US",
    India="India",
    Default="NA"
   }
let roll1:Student=new Student("Emiy","Female",23,"Default");
console.log(roll1);
