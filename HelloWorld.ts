let  message: string = 'HEllo';
console.log(message); 
let no:number = 234;
let ans:boolean= true;
console.log(no);
console.log(ans);
const we:string[]=["tom","john"];
we.push("loko");
console.log(we);
console.log(we.length);
const student:{nid:string, rollno:number, gender:string}={
    nid:"Srushti",
    rollno:25,
    gender:"F"
};
console.log(student.nid);
let ourTuple:[number,boolean,string];
ourTuple=[67,true,"This is angular batch"];
console.log(ourTuple[0]);
enum week{
    sun,
    mon,
    tue=200,
    wed,

}
console.log(week.wed);
interface Graphics{
    height:number,
    width:number,
}
const rectangle:Graphics={
    height:23,
    width:33
};
interface Cube extends Graphics{
    length:Number
}
const cube:Cube={
    height:23,
    width:33,
    length:20
};
console.log(cube);
console.log(cube.length);

