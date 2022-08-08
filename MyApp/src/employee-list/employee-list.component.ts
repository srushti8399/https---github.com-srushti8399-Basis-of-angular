import { Component } from "@angular/core";
import { zipAll } from "rxjs";
@Component({
    selector:'emp-list',
    templateUrl:'./employee-list.component.html'
  
})
export class employeelistComponent{
  selectedRbValue:string="All";
  selectedRbValuedept:string="Total";

    
  employees:any[]=[
    {code:'10',name:'TOM',gender:'Male',salary:3000},
    {code:'20',name:'Shizuka',gender:'Female',salary:23000},
    {code:'10',name:'Jerry',gender:'Male',salary:33000},
    {code:'10',name:'Anna',gender:'Female',salary:36000}
  ];
  department:any[]=[
    {department_name:'HR',Designation:'Manager'},
    {department_name:'Technical',Designation:'Trainee Engineer'},
    {department_name:'HR',Designation:'HR-Manager'},
    {department_name:'Technical',Designation:'Senior Software Engineer'}

  ];
  //Employee table radio button
  getTotalEmployeeCount():number{
    return this.employees.length;
  }
  getTotalmaleCount():number{
  return this.employees.filter(e=>e.gender==="Male").length;
  }
   getTotalfemaleCount():number{
    return this.employees.filter(e=>e.gender==="Female").length;
  }
  gettingSelectedRadioButtonValue(value:string){
    this.selectedRbValue=value;
  }
  //Department table radio button
  getTotalDepartmentCount():number{
    return this.department.length;
  }
  getTotalHRCount():number{
    return this.department.filter(d=>d.department_name==="HR").length;
  }
  getTotalTechnicalCount():number{
    return this.department.filter(d=>d.department_name==="Technical").length;
  
  }
  gettingSelectedRadioButtonValuedept(value:string){
    console.log(this.selectedRbValuedept);
    this.selectedRbValuedept=value;
  }


//Show and hide employee table on button click

  showEmpTable:boolean=false;
  toggleShowTable():void{
    this.showEmpTable= !this.showEmpTable;
  }
  showDeptTable:boolean=false;
   toggleShowTable1():void{
    this.showDeptTable= !this.showDeptTable;
    
  }
  btnVal="Show Employee Table";
  btnbool:boolean=false;
  changeText(){

    this.btnbool=!this.btnbool;
    this.btnVal="Hide Employee Table";
    if(this.btnbool==false){
      this.btnVal="Show Employee Table";
    }
  }
  //Show and hide department table on button click
  btnVal1="Show Department Table";
  btnbool1:boolean=false;
  changeText1(){
    this.btnbool1=!this.btnbool1
    this.btnVal1="Hide Department Table";
  if(this.btnbool1==false){
    this.btnVal1="Show Department Table";
  }
  
  }
}