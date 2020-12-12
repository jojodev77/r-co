import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreOrComponent } from './livre-or.component';

describe('LivreOrComponent', () => {
  let component: LivreOrComponent;
  let fixture: ComponentFixture<LivreOrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreOrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
