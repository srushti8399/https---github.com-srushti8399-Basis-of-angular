
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser} from 'src/Model/User/userModel'

@Component({
   selector:'temp-form',   
   templateUrl:'./TemplateDrivenForm.component.html',
   styleUrls:['./TemplateDrivenForm.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user:IUser={
    id:0,
    name:"",
    gender:"",
    department:"",
    email:"",
    phoneNumber:0
  }
  firstname:string="";
  Middlename:string="";
  lastname:string="";
  emailId:string="";
  


    selectedCountry: String = "Choose Country";
    Countries:any = [
      { name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']}, ] },
		{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
		{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
		{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
		{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
    ];
    states: Array<any> = [];
    cities: Array<any> = [];
    changeCountry(country: any) {
      this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; 
      console.log(country);
	}
  changeState(state: any) { 
		this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities;
	}
    

    PersonDetails(form:NgForm){

     console.log(form);
     console.log(form.value);
    }
    genders:any[]=[
      {viewValue:-1,Text:"Select Gender"},
      {viewValue:1,Text:"Male"},
      {viewValue:2,Text:"FeMale"}
    ];
    constructor() { }

    ngOnInit(): void {
    }
    saveUser(form:NgForm){
  console.log(this.user);
  console.log(form);
    }

}
