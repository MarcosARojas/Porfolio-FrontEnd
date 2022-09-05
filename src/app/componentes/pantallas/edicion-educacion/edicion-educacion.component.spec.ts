import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionEducacionComponent } from './edicion-educacion.component';

describe('EdicionEducacionComponent', () => {
  let component: EdicionEducacionComponent;
  let fixture: ComponentFixture<EdicionEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
