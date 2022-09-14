import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoNotengoEsaRedComponent } from './aviso-notengo-esa-red.component';

describe('AvisoNotengoEsaRedComponent', () => {
  let component: AvisoNotengoEsaRedComponent;
  let fixture: ComponentFixture<AvisoNotengoEsaRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoNotengoEsaRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoNotengoEsaRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
