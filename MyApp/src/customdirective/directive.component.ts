import { Component } from '@angular/core';


@Component({
  selector:'dir-com',
  templateUrl:'./directive.component.html'
})
export class DirectiveComponent {
    show:boolean=true;
  Buttontoggle(){
    this.show=!this.show

  }
}
