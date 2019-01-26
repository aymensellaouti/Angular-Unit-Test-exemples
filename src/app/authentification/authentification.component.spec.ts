import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthentificationComponent } from './authentification.component';
import {AuthentificationService} from '../authentification.service';
import {BackendService} from '../backend.service';
class MockAuthentificationService {
  auth = false;
  isAuthentified() {
    return this.auth;
  }
}
describe('AuthentificationComponent', () => {
  let component: AuthentificationComponent;
  let fixture: ComponentFixture<AuthentificationComponent>;
  let compiled: any;
  let serviceMock: AuthentificationService;
  let backService: BackendService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationComponent ],
      providers: [AuthentificationService, BackendService]
      });
    TestBed.overrideComponent(
      AuthentificationComponent,
      { set: { providers: [{ provide: AuthentificationService, useClass: MockAuthentificationService }] } }
    );
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    serviceMock = fixture.debugElement.injector.get(AuthentificationService);
  });
  afterEach( () => {
    serviceMock = null;
    compiled = null;
    component = null;
    fixture = null;
    }
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display User logged when user is logged', () => {
    serviceMock.auth = true;
    component.login();
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('User Logged');
  });
  it('should display User not logged when user is not logged', () => {
    component.login();
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('User not Logged');
  });
});
