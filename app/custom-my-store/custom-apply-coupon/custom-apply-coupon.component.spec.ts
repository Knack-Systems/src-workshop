import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomApplyCouponComponent } from './custom-apply-coupon.component';

describe('CustomApplyCouponComponent', () => {
  let component: CustomApplyCouponComponent;
  let fixture: ComponentFixture<CustomApplyCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomApplyCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomApplyCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
