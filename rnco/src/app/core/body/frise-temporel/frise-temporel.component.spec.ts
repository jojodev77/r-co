import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriseTemporelComponent } from './frise-temporel.component';

describe('FriseTemporelComponent', () => {
  let component: FriseTemporelComponent;
  let fixture: ComponentFixture<FriseTemporelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriseTemporelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriseTemporelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
