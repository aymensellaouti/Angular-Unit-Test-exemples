import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorComponent } from './color.component';
import {By} from '@angular/platform-browser';

fdescribe('ColorComponent', () => {
  let component: ColorComponent;
  let fixture: ComponentFixture<ColorComponent>;
  let compiled: ComponentFixture<ColorComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('p should have red color', () => {
    fixture.detectChanges();
    const h = fixture.debugElement.query(By.css('p'));
    expect(h.nativeElement.style.backgroundColor.trim()).toBe('red');
    h.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(h.nativeElement.style.backgroundColor.trim()).toBe('yellow');
  });
});
