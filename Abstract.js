// abstract class Shape{
//     Length:number;
//     constructor(length:number){
//         this.Length=length;
//     }
//     abstract GetName():number;
// }
// class Calculate extends Shape{
//     constructor(Length:number){
//         super(Length);
//     }
//     GetName(): number {
//         return this.Length;
//     }
//     CalculateSquareArea(Len:number){
//         this.Length=Len;
//         let areaofsquare=Len*Len;
//         console.log("Area of Square="+areaofsquare);
//     }
//     static pi:number=3.14;
//     CalculatecircleArea(Len:number){
//         this.Length=Len;
//         let areaofcircle=Calculate.pi*Len*Len;
//         console.log("Area of Circle="+areaofcircle);
//     }
// }
// class Rectangle extends Shape{
//     constructor(Length:number){
//         super(Length);
//     }
//     GetName(): number {
//         return this.Length;
//     }
//     calculaterectanglearea(Len1:number,Breadth:number){
//         this.Length=Len1;
//         let areaofrectangle=Len1*Breadth;
//         console.log("Area of Rectangle="+areaofrectangle);
//     }
// }
// let obj:Calculate=new Calculate(5);
// let obj1:Rectangle= new Rectangle(6);
// obj.CalculateSquareArea(6);
// obj.CalculatecircleArea(9);
// obj1.calculaterectanglearea(5,7);
// interface mycar {name:string,model:number};
// class Car {
//     name:string;
//     private model:number;
//     constructor(x:mycar){
//         this.name = x.name;
//         this.model = x.model;
//     }
//     printCar(){
//         console.log (this.name + ', '+ this.model);
//     }
//     getModel(){
//         return this.model;
//     }
//     setname(data:string){
// return this.name = data;
//     }
// }
// let car = new Car({name:"Benz",model:2022});
// car.setname("Toyota");
// car.printCar();
var a, b, c;
a = [1, 2, 3];
c = a.filter(function (item) { return item != 1; });
console.log(c);
