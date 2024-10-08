import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  users:any=[];
  loading=true;

  constructor(private httpClient: HttpClient, private router: Router){}

  ngOnInit(): void{
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (data:any)=>{
        this.users=data;
        setTimeout(()=>{
          this.loading=false;
        },2000);
      }
    )
  }
profile(id:number){
    this.router.navigate(['/dashboard/user-card/'+id]);
}

}
