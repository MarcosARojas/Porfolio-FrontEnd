import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFacebookComponent } from './button-facebook.component';

describe('ButtonFacebookComponent', () => {
  let component: ButtonFacebookComponent;
  let fixture: ComponentFixture<ButtonFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFacebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
