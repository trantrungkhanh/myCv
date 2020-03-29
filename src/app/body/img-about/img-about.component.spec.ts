import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAboutComponent } from './img-about.component';

describe('ImgAboutComponent', () => {
  let component: ImgAboutComponent;
  let fixture: ComponentFixture<ImgAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
