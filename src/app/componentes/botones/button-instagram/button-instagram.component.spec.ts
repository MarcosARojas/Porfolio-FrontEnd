import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInstagramComponent } from './button-instagram.component';

describe('ButtonInstagramComponent', () => {
  let component: ButtonInstagramComponent;
  let fixture: ComponentFixture<ButtonInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonInstagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
