import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ActiveCartService,
  Cart,
  CartVoucherService,
  CustomerCoupon,
  CustomerCouponSearchResult,
  CustomerCouponService,
} from '@spartacus/core';
import { combineLatest, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-apply-coupon',
  templateUrl: './apply-coupon.component.html',
  styleUrls: ['./apply-coupon.component.scss'],
})
export class ApplyCouponComponent implements OnInit {
  activeCoupons: string[] = [];
  couponCode: string = '';

  constructor(
    protected customerCouponService: CustomerCouponService,
    protected cartVoucherService: CartVoucherService
  ) {}

  ngOnInit(): void {
    this.customerCouponService
      .getCustomerCoupons(2)
      .subscribe((res: any) => (this.activeCoupons = res.coupons));
  }

  apply() {
    try {
      this.cartVoucherService.addVoucher(this.couponCode);
    } catch (e) {
      console.log(e);
    }
  }
}
