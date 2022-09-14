import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionSkillComponent } from './edicion-skill.component';

describe('EdicionSkillComponent', () => {
  let component: EdicionSkillComponent;
  let fixture: ComponentFixture<EdicionSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
