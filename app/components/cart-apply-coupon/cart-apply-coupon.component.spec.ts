import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartApplyCouponComponent } from './cart-apply-coupon.component';

describe('CartApplyCouponComponent', () => {
  let component: CartApplyCouponComponent;
  let fixture: ComponentFixture<CartApplyCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartApplyCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartApplyCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
