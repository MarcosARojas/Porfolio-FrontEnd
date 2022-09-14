import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInfoUserComponent } from './crear-info-user.component';

describe('CrearInfoUserComponent', () => {
  let component: CrearInfoUserComponent;
  let fixture: ComponentFixture<CrearInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInfoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
