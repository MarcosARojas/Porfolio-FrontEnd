import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeUserComponent } from './acerca-de-user.component';

describe('AcercaDeUserComponent', () => {
  let component: AcercaDeUserComponent;
  let fixture: ComponentFixture<AcercaDeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
