import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  id = '';
  user: any = {};

  

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((data: any) => {
      this.id = data.id;

      this.userService.getUsers(this.id).subscribe(
        (data:any)=>{
          this.user= data;
        }
      )
      
    });
  }
}
