import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword=false;
  loginForm: FormGroup= new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  })

  toggleShow(){
    this.showPassword=!this.showPassword;
  }
  // injecting login service and router service
  constructor(private loginService: LoginService, private router: Router){}
  login(){
    console.log(this.loginForm);

    this.loginService.dologin(this.loginForm.value).subscribe(
      (data :any) =>{
        this.router.navigateByUrl("/dashboard");
        localStorage.setItem('token', data.token);
      },
      (err : any)=> {
        alert("login failed")
      }
    )
  }
}
