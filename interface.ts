//Creating a interface with getarea method
interface Shapes{

    getArea(s:number):number;
}
// creating a class Square which implements interface shapes

class Squares implements Shapes
{
    getArea(s: number): number {
        return s*s;
    }
}
//Creating a class Circle which implements interface shapes

class Circles implements Shapes{

    getArea(s: number): number {
        return 3.14 * s * s;
    }
}
//Creating class Rectangles which implements interface shapes

class Rectangles implements Shapes{

    height:number;
    width:number;

    constructor(h:number,w:number)
    {
        this.height = h;
        this.width = w;
    }
    getArea(): number {
        return this.height * this.width;
    }   
}

// Creating Objects

let si = new Squares();
let cir = new Circles();
let rec = new Rectangles(34,23);

//Calling Methods

console.log(si.getArea(23));
console.log(cir.getArea(21));
console.log(rec.getArea());