import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetListeComponent } from './projet-liste.component';

describe('ProjetListeComponent', () => {
  let component: ProjetListeComponent;
  let fixture: ComponentFixture<ProjetListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
