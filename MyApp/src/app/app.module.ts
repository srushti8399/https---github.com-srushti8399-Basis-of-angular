import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DepartmentComponent } from 'src/Department/department.component';
import { employeeComponent } from 'src/employee/employee.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { employeelistComponent } from 'src/employee-list/employee-list.component';
import { EmployeeCountComponent } from 'src/employeecount/employeecount.component';
import { DepartmentCountComponent } from 'src/departmentcount/departmentcount.component';
import { EmployeeTitlepipe } from 'src/employee/employeeTitle.pipe';
import { SimpleChangesComponent } from 'src/simpleChanges/simplechanges.component';
import { DepartmentTitlepipe } from 'src/Department/departmentpipes.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { TemplateDrivenFormComponent } from 'src/TemplateDrivenForm/TemplateDriven.Component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SelectValidator } from 'src/Shared/Select.Directive.Validator';
import { AccountModule } from './account/account.module';
import { HrModule } from './hr/hr.module';
import { Employee1Module } from './employee1/employee1.module';
import { EmployeeServices } from 'src/EmployeeService/Employee.service';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,employeeComponent,DepartmentComponent,employeelistComponent,EmployeeCountComponent,DepartmentCountComponent,EmployeeTitlepipe,SimpleChangesComponent,DepartmentTitlepipe, ContentProjectionComponent,TemplateDrivenFormComponent,SelectValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    AccountModule,
    HrModule,
    Employee1Module,
    MatTableModule
  
  ],
  providers: [EmployeeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
