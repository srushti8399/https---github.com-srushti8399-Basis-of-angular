class Algebra{
    public Add(a:number,b:number,c:number=3){
        return a+b+c;

    }
    public Multiply(c:number,d:number){
        return c*d;
    }

};
let sum=new Algebra();
let result:number=sum.Add(23,34);
console.log(result);
let answer:number=sum.Multiply(4,6);
console.log(answer);
