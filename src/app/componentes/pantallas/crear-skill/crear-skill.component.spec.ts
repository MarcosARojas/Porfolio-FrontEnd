import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSkillComponent } from './crear-skill.component';

describe('CrearSkillComponent', () => {
  let component: CrearSkillComponent;
  let fixture: ComponentFixture<CrearSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
