import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  isLogged = true;
  constructor(private authentificationService: AuthentificationService) { }
  ngOnInit() {
  }
  login() {
    this.isLogged = this.authentificationService.isAuthentified();
  }
}
