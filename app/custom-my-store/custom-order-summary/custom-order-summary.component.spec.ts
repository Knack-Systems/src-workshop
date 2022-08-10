import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOrderSummaryComponent } from './custom-order-summary.component';

describe('CustomOrderSummaryComponent', () => {
  let component: CustomOrderSummaryComponent;
  let fixture: ComponentFixture<CustomOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOrderSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
