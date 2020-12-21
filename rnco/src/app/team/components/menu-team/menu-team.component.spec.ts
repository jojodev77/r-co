import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTeamComponent } from './menu-team.component';

describe('MenuTeamComponent', () => {
  let component: MenuTeamComponent;
  let fixture: ComponentFixture<MenuTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
