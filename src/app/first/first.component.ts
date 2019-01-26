import { Component, OnInit } from '@angular/core';
import {FirstServiceService} from '../first-service.service';
import {Observable, Subject, fromEvent} from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  myObservable: Observable<any>;
  name = 'aymen' ;
  firstname: string;
  data;
  myImages: string[];
  subject: Subject<any>;
  i: number;
  constructor(private firstService: FirstServiceService) { }

  ngOnInit() {
    this.name = 'mohamed';
    this.myImages = [
      'correction.jpg',
      'sales.png',
      'workflow.png'
    ];
    this.firstname = this.firstService.getFirstname();
    this.subject = new Subject();
    this.myObservable = new Observable((observer) => {
      setInterval(() => {
        observer.next('../assets/images/' + this.myImages[this.i - 1]);
        // observer.complete();
        this.i--;
        if (!this.i) {
          clearInterval();
          observer.complete();
        }
      }, 1000, this.i = this.myImages.length);
    } );
    this.myObservable.subscribe(
      (data) => {
        this.data = data;
      }
    );
    }
    slide() {
      setInterval(() => {
        this.subject.next('../assets/images/' + this.myImages[this.i - 1]);
        // observer.complete();
        this.i--;
        if (!this.i) {
          this.i = this.myImages.length;
        }
      }, 1000, this.i = this.myImages.length
      );
    }

    stopSlide() {
      this.subject.complete();
    }
    // this.myObservable.subscribe(
    //   (data) => {
    //     this.data = data;
    //   }
    // );
}
