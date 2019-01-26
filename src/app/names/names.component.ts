import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  names: string[];
  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.loadPersonnesNames().subscribe(
      (names) => this.names = names
    );
  }

}
