import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSkillsComponent } from './img-skills.component';

describe('ImgSkillsComponent', () => {
  let component: ImgSkillsComponent;
  let fixture: ComponentFixture<ImgSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
