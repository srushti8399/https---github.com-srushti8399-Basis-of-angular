import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee1Component } from './employee1/employee1.component';



@NgModule({
  declarations: [
    Employee1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[Employee1Component]
})
export class Employee1Module { }
