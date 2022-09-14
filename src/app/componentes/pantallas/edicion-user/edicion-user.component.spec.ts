import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionUserComponent } from './edicion-user.component';

describe('EdicionUserComponent', () => {
  let component: EdicionUserComponent;
  let fixture: ComponentFixture<EdicionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
