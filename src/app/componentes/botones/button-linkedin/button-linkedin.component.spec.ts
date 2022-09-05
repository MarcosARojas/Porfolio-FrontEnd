import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLinkedinComponent } from './button-linkedin.component';

describe('ButtonLinkedinComponent', () => {
  let component: ButtonLinkedinComponent;
  let fixture: ComponentFixture<ButtonLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLinkedinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
