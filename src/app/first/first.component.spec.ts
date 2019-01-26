import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { FirstComponent } from './first.component';
import {FirstServiceService} from '../first-service.service';
import {DebugElement} from '@angular/core';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let debugElement : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponent ]
    });
  }));

  beforeEach(() => {
    // Récupérer l'objet fixture qui contient l'ensemble des fonctionnalité
    // de test offerte telque récupérer le composant.
    fixture = TestBed.createComponent(FirstComponent);
    // Récupérer l'instance de la classe du composant à traiter
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain name variable with value aymen', () => {
    // expect est une fonction qui va spécifier au test ce qu'on expecte comme résultat
    expect(component.name).toEqual('aymen');
  });
  it('should have name equal to mohamed after ngOnInit', () => {
    // On force le déclanchement de l'autoDetectChanges
    fixture.autoDetectChanges();
    expect(fixture.debugElement.componentInstance).toBe(fixture.componentInstance);
  });
  it('should return aymen', () => {
    const service = TestBed.get(FirstServiceService); // fixture.debugElement.injector.get(FirstServiceService);
    expect(service.getFirstname()).toEqual('aymen');
  });
  it('should have a value workflow when observable finish', fakeAsync(() => {
    let value;
    setTimeout(() => value = 10, 1000);
    expect(value).toEqual(undefined);
    tick(1000);
    expect(value).toEqual(10);
  }));

  it('should have a async', async(() => {
    let value;
    const p = new Promise(
      resolve => {
        resolve(10);
      }
    );
    expect(value).toEqual(undefined);
    p.then(
      (x) => {
        value = x ;
      }
    );
    fixture.whenStable().then(
      () => {
        expect(value).toEqual(10);
      }
    );
  }));
});
