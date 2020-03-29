import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEducationComponent } from './img-education.component';

describe('ImgEducationComponent', () => {
  let component: ImgEducationComponent;
  let fixture: ComponentFixture<ImgEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
