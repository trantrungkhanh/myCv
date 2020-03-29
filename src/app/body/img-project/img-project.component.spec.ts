import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgProjectComponent } from './img-project.component';

describe('ImgProjectComponent', () => {
  let component: ImgProjectComponent;
  let fixture: ComponentFixture<ImgProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
