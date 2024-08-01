import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-real-time-task',
  templateUrl: './real-time-task.component.html',
  styleUrls: ['./real-time-task.component.scss']
})
export class RealTimeTaskComponent {

  regForm:FormGroup=new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(15)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(8)]),
    age: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required,]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    confirmPassword: new FormControl('',[Validators.required,Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})')])
  })
  

  ngOnInit(): void{
  }
  submitted=false;
  showPassword=true;
  showConfirmPassword=true;
  toggleShow(){
    this.showPassword=!this.showPassword;
  }
  toggleShow1(){
    this.showConfirmPassword=!this.showConfirmPassword;
  }
  submit(){
    console.log(this.regForm.value)
    this.submitted=true;
  }
  reset(){
    this.regForm.reset();
  }
}
