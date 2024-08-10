import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }

  // get user by id
  getUserById(id: number):Observable<any>{
    return this.httpClient.get(this.apiUrl + '/' + id);
  
  }

  getUsers():Observable<any>{
    return this.httpClient.get(this.apiUrl);
  
  }
}
