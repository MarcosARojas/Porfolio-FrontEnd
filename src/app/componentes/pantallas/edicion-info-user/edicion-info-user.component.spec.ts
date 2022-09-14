import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionInfoUserComponent } from './edicion-info-user.component';

describe('EdicionInfoUserComponent', () => {
  let component: EdicionInfoUserComponent;
  let fixture: ComponentFixture<EdicionInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionInfoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
