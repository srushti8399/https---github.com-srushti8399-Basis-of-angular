import{Injectable} from'@angular/core'
import { Iemployee } from 'src/employee/employeemodel'

@Injectable()
export class EmployeeServices{
    employees1:Iemployee[]=[
        {firstname:'Shruti',middlename:'D',lastname:'Lahoti',gender:'Female',UserType:'Permanent'},
        {firstname:'Praddumna',middlename:'R',lastname:'Raut',gender:'Male',UserType:'Permanent'},
        {firstname:'Punam',middlename:'T',lastname:'Makh',gender:'Female',UserType:'Permanent'},
        {firstname:'Kunal',middlename:'N',lastname:'Nemade',gender:'Male',UserType:'Permanent'},
        {firstname:'Srushti',middlename:'S',lastname:'Deshpande',gender:'Female',UserType:'Permanent'},
        {firstname:'Vivek',middlename:'D',lastname:'Bhore',gender:'Male',UserType:'Contractual'},
        {firstname:'Radhika',middlename:'S',lastname:'Deshmukh',gender:'Female',UserType:'Contractual'},
        {firstname:'Suyog',middlename:'S',lastname:'Vyas',gender:'Male',UserType:'Contractual'},
        {firstname:'Shrutika',middlename:'D',lastname:'Lakhe',gender:'Female',UserType:'Contractual'},
        {firstname:'Mitesh',middlename:'D',lastname:'Sakalkar',gender:'Male',UserType:'Contractual'}
    ]
    getEmployees():Iemployee[] {
        return this.employees1;
    }


    

}