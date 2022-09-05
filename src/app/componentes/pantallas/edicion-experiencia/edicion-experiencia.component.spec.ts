import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionExperienciaComponent } from './edicion-experiencia.component';

describe('EdicionExperienciaComponent', () => {
  let component: EdicionExperienciaComponent;
  let fixture: ComponentFixture<EdicionExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
