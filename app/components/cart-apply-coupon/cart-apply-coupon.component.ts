import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartVoucherService, CustomerCouponService, ActiveCartService } from '@spartacus/core';
import { CartCouponComponent } from '@spartacus/storefront';
import { CartTotalService } from '../carts-total.service';

@Component({
  selector: 'app-cart-apply-coupon',
  templateUrl: './cart-apply-coupon.component.html',
  styleUrls: ['./cart-apply-coupon.component.scss']
})
export class CartApplyCouponComponent extends CartCouponComponent implements OnInit {
  isShow = true;
  error = '';

  constructor(protected cartVoucherService: CartVoucherService,
    protected formBuilder: FormBuilder,
    protected customerCouponService: CustomerCouponService,
    protected activeCartService: ActiveCartService,
    protected cartTotalService: CartTotalService) { 
    super(cartVoucherService, formBuilder, customerCouponService, activeCartService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  toggleDisplay() {
    console.log('coupon', this.couponForm);
    this.couponForm.controls.couponCode.reset();
    this.isShow = !this.isShow;
  }
  onSubmit(){
    console.log('this.couponForm', this.couponForm.value.couponCode);
    //this.error = null;
    if (!this.couponForm.value.couponCode) {
      this.error = 'Enter promotion code';
    }else {
      this.cartTotalService
        .addPromoCard(this.couponForm.value.couponCode)
        .subscribe(response => {
          console.log('response', response);
        });
    }
    
  }

}
