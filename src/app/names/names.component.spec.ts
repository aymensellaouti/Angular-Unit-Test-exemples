import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { NamesComponent } from './names.component';
import {defer} from 'rxjs';
import {BackendService} from '../backend.service';
import {By} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
describe('NamesComponent', () => {
  let component: NamesComponent;
  let fixture: ComponentFixture<NamesComponent>;
  let backService: BackendService;
  let spy: any;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesComponent ],
      providers: [BackendService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
    backService = TestBed.get(BackendService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show needed data', fakeAsync(() => {
        spy = spyOn(backService, 'loadPersonnesNames').and.returnValue(asyncData(['aymen', 'mohamed']));
        fixture.detectChanges();
            backService.loadPersonnesNames().subscribe(
              (noms) => {
                component.names = noms;
              }
            );
            tick();
            fixture.detectChanges();
            const names = fixture.debugElement.queryAll(By.css('.personne'));
            expect(names.length).toBe(2);
            expect(names[0].nativeElement.textContent.trim()).toContain('aymen');
  } ));
});
