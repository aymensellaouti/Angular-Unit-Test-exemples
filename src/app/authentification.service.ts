import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {
  authenified = true;
  constructor() { }
  isAuthentified(): boolean {

    this.authenified = !! localStorage.getItem('user');
    return this.authenified;
  }
}
