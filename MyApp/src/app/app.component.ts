import { Component } from '@angular/core';


@Component({
  selector:'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  userInput:string = '';
  name:string="Srushti";

  getdata():string {
    return this.userInput+this.name;
  }
  onclick(){
          console.log("Button is clicked");
  }
  
}
