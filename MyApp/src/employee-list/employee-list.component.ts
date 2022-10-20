import { Component } from "@angular/core";
import { Iemployee } from "src/employee/employeemodel";
import { EmployeeServices } from "src/EmployeeService/Employee.service";
@Component({
    selector:'emp-list',
    templateUrl:'./employee-list.component.html',
    styleUrls:['./employee-list.component.css']
  
})
export class employeelistComponent{
  selectedRbValue:string="All";
  selectedRbValuetype:string="Contractual";
  
  displayedColumns: string[] = ['firstname', 'middlename', 'lastname', 'gender','UserType'];

  employees:Iemployee[]= [];
  malee:Iemployee[]=[];
  femalee:Iemployee[]=[];
  contr:Iemployee[]=[];
  perm:Iemployee[]=[];
  

  constructor(private _empServices:EmployeeServices){
    
  }
  ngOnInit() {
    this.femalee=this.getTotalfemale();
    this.malee=this.getTotalmale();
    this.employees=this.getTotalEmployee();
    this.contr=this.getTotalContratual();
    this.perm=this.getTotalPermanent();

    //dataSource= this._empServices.getEmployees();
    }
   dataSource= this._empServices.getEmployees();



  

    
  // employees:any[]=[
  //   {code:'10',name:'TOM',gender:'Male',salary:3000},
  //   {code:'20',name:'Shizuka',gender:'Female',salary:23000},
  //   {code:'10',name:'Jerry',gender:'Male',salary:33000},
  //   {code:'10',name:'Anna',gender:'Female',salary:36000}
  // ];
  // department:any[]=[
  //   {department_name:'HR',Designation:'Manager'},
  //   {department_name:'Technical',Designation:'Trainee Engineer'},
  //   {department_name:'HR',Designation:'HR-Manager'},
  //   {department_name:'Technical',Designation:'Senior Software Engineer'}

  // ];
  //Employee table radio button
  getTotalEmployeeCount():number{
    return this.dataSource.length;
    
  }
  getTotalEmployee(){
    return this.dataSource;
    
  }
  getTotalmaleCount():number{
  return this.dataSource.filter(e=>e.gender==="Male").length;
  
  
  }
   getTotalfemaleCount():number{
    return this.dataSource.filter(e=>e.gender==="Female").length;
  }
  getTotalmale(){
    return this.dataSource.filter(e=>e.gender==="Male");
    
    
    }
     getTotalfemale(){
      return this.dataSource.filter(e=>e.gender==="Female");
    }
  gettingSelectedRadioButtonValue(value:string){
    this.selectedRbValue=value;
  }
  getTotalContratualCount():number{
    return this.dataSource.filter(e=>e.UserType==="Contractual").length;
     }
     getTotalPermanentCount():number{
      return this.dataSource.filter(e=>e.UserType==="Permanent").length;
      }
      gettingSelectedRadioButtonValue1(value:string){
        this.selectedRbValuetype=value;
      }
      getTotalContratual(){
        return this.dataSource.filter(e=>e.UserType==="Contractual");
         }

         getTotalPermanent(){
          return this.dataSource.filter(e=>e.UserType==="Permanent");
          }





  //Department table radio button
  // getTotalDepartmentCount():number{
  //   return this.department.length;
  // }
  // getTotalHRCount():number{
  //   return this.department.filter(d=>d.department_name==="HR").length;
  // }
  // getTotalTechnicalCount():number{
  //   return this.department.filter(d=>d.department_name==="Technical").length;
  
  // }
  // gettingSelectedRadioButtonValuedept(value:string){
  //   console.log(this.selectedRbValuedept);
  //   this.selectedRbValuedept=value;
  }


//Show and hide employee table on button click

//   showEmpTable:boolean=false;
//   toggleShowTable():void{
//     this.showEmpTable= !this.showEmpTable;
//   }
//   showDeptTable:boolean=false;
//    toggleShowTable1():void{
//     this.showDeptTable= !this.showDeptTable;
    
//   }
//   btnVal="Show Employee Table";
//   btnbool:boolean=false;
//   changeText(){

//     this.btnbool=!this.btnbool;
//     this.btnVal="Hide Employee Table";
//     if(this.btnbool==false){
//       this.btnVal="Show Employee Table";
//     }
//   }
//   //Show and hide department table on button click
//   btnVal1="Show Department Table";
//   btnbool1:boolean=false;
//   changeText1(){
//     this.btnbool1=!this.btnbool1
//     this.btnVal1="Hide Department Table";
//   if(this.btnbool1==false){
//     this.btnVal1="Show Department Table";
//   }
  
//   }
// }