import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaInicioUserComponent } from './pantalla-inicio-user.component';

describe('PantallaInicioUserComponent', () => {
  let component: PantallaInicioUserComponent;
  let fixture: ComponentFixture<PantallaInicioUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaInicioUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaInicioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
