import { Component, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.scss']
})
export class DomManipulationComponent {
  @ViewChild("test") d:any;
  @ViewChildren("heading") h:any;

  // view child decorator
  ngAfterViewInit(){
    console.log(this.d);
    this.d.nativeElement.onkeypress=()=>{
      console.log(this.d.nativeElement.value);
    }
  }
  // view childern decorator
  change(){
    console.log(this.h);
  }
  
}
