import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers: any;
  getUserById(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
