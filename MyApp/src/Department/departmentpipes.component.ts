import{Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'DepartmentTitle'
})
export class DepartmentTitlepipe implements PipeTransform{
    transform(value: any,department:string):string {
        if(department=="Manager" || department=="HR-Manager")
        return "Human resource "+value;
        else
        return "Technology "+value;
    
}
}
