import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAppliedCouponComponent } from './custom-applied-coupon.component';

describe('CustomAppliedCouponComponent', () => {
  let component: CustomAppliedCouponComponent;
  let fixture: ComponentFixture<CustomAppliedCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAppliedCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAppliedCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
