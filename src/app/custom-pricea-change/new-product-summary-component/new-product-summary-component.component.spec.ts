import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductSummaryComponentComponent } from './new-product-summary-component.component';

describe('NewProductSummaryComponentComponent', () => {
  let component: NewProductSummaryComponentComponent;
  let fixture: ComponentFixture<NewProductSummaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductSummaryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
