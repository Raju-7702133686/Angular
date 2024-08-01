import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  show=false;

  popup(){
    this.show=true;
  }
  close(){
    this.show=false;
  }
  closeOverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.show=false;
    }
  }
}
