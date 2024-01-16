import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetCardComponent } from './projet-card.component';

describe('ProjetCardComponent', () => {
  let component: ProjetCardComponent;
  let fixture: ComponentFixture<ProjetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
