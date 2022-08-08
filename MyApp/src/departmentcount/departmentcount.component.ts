import{Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector:'dept-count',
    templateUrl:'./departmentcount.component.html'
})
export class DepartmentCountComponent{

    @Input() 
    TotalCount:number=0;

    @Input()
    HRCount:number=0;

    @Input()
    TechnicalCount:number=0;

    
    selectedRBValue1:string="Total";

    
    @Output()
   rbselectionChange1:EventEmitter<string> = new EventEmitter<string>();
   

    
    onCheckboxSelectionChange1(){
        console.log(this.selectedRBValue1)
    
    this.rbselectionChange1.emit(this.selectedRBValue1);

    }
}
