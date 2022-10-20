import{Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector:'emp-count',
    templateUrl:'./employeeCount.component.html'
})
export class EmployeeCountComponent{

    @Input() 
    allCount:number=0;

    @Input()
    maleCount:number=0;

    @Input()
    femaleCount:number=0;

    @Input()
    ContractualCount:number=0;

    @Input()
    PermanantCount:number=0;

    
    selectedRBValue:string="All";
    selectedSlValue:string="Contractual";


    
    @Output()
   rbselectionChange:EventEmitter<string> = new EventEmitter<string>();

    
    onRadioButtonSelectionChange(){
       // console.log("Child = "+this.selectedRBValue);
    this.rbselectionChange.emit(this.selectedRBValue);

    }

    @Output()
   slselectionChange:EventEmitter<string> = new EventEmitter<string>();

   onRadioButtonSelectionChange1(){
    // console.log("Child = "+this.selectedRBValue);
 this.slselectionChange.emit(this.selectedSlValue);
}
}
