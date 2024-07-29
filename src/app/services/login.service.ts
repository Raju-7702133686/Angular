import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  dologin(payload:any[]): Observable<any[]>{
    return this.httpClient.post<any[]>("https://reqres.in/api/login",payload);
  }
}
