import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdenditeComponent } from './idendite.component';

describe('IdenditeComponent', () => {
  let component: IdenditeComponent;
  let fixture: ComponentFixture<IdenditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdenditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdenditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
