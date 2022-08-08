import{ Component, Input, SimpleChanges } from'@angular/core'
@Component({
    selector:'simple',
    template:`Entered Value : {{title}}`
})
export class SimpleChangesComponent{
    @Input()
    title:string='AngularDemo';


 ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    for(let propertyName in changes){
        let changeJson= changes[propertyName];
        let currentValue=JSON.stringify(changeJson.currentValue);
        let previousValue=JSON.stringify(changeJson.previousValue);
        console.log(`${propertyName}:Current Value = ${currentValue} Previous Value = ${previousValue}`)
    }
 }   
}