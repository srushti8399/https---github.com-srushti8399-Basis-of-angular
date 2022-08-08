class Emp{
    name:string;
    gender:string;
    id:number;
}
const mem1=new Emp();
mem1.name="Jerry";
mem1.gender="Male";
mem1.id=2345;
console.log(mem1);
mem1.name="Tom";
console.log(mem1);