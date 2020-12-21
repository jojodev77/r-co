import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogValidationComponent } from './blog-validation.component';

describe('BlogValidationComponent', () => {
  let component: BlogValidationComponent;
  let fixture: ComponentFixture<BlogValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
