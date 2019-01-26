import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  constructor() { }
  getFirstname<strin>() {
    return 'aymen';
  }
}
