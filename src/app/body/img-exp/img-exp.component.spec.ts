import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgExpComponent } from './img-exp.component';

describe('ImgExpComponent', () => {
  let component: ImgExpComponent;
  let fixture: ComponentFixture<ImgExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
