import{Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'EmployeeGender'
})
export class EmployeeTitlepipe implements PipeTransform{
    transform(value: any,gender1:string):string {
        if(gender1=="Male")
        return "Mr. "+value;
        else
        return "Miss. "+value;
    
}
}
