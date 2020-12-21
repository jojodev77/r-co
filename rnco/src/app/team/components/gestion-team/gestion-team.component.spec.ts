import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTeamComponent } from './gestion-team.component';

describe('GestionTeamComponent', () => {
  let component: GestionTeamComponent;
  let fixture: ComponentFixture<GestionTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
