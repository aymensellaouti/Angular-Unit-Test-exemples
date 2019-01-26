import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FirstComponent} from './first/first.component';
import {NamesComponent} from './names/names.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ColorComponent} from './color/color.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FirstComponent,
        NamesComponent,
        ColorComponent
      ],
      imports: [HttpClientModule]
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testExemplesAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testExemplesAngular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testExemplesAngular!');
  });
});
