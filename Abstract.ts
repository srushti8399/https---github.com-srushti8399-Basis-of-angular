abstract class Shape{
    Length:number;
    constructor(length:number){
        this.Length=length;
    }
    abstract GetName():number;
}
class Calculate extends Shape{

    constructor(Length:number){
        super(Length);
    }

    GetName(): number {
        return this.Length;
        
    }
    CalculateSquareArea(Len:number){
        this.Length=Len;
        let areaofsquare=Len*Len;
        console.log("Area of Square="+areaofsquare);
    }
    static pi:number=3.14;
    CalculatecircleArea(Len:number){
        this.Length=Len;

        let areaofcircle=Calculate.pi*Len*Len;
        console.log("Area of Circle="+areaofcircle);
    }
}
class Rectangle extends Shape{

    constructor(Length:number){
        super(Length);
    }

    GetName(): number {
        return this.Length;
        
    }
    calculaterectanglearea(Len1:number,Breadth:number){
        this.Length=Len1;
        let areaofrectangle=Len1*Breadth;
        console.log("Area of Rectangle="+areaofrectangle);
    }
}
let obj:Calculate=new Calculate(5);
let obj1:Rectangle= new Rectangle(6);
obj.CalculateSquareArea(6);
obj.CalculatecircleArea(9);
obj1.calculaterectanglearea(5,7);
