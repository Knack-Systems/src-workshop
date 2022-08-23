import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveCartService, Cart, CartVoucherService, CustomerCoupon, CustomerCouponSearchResult, CustomerCouponService, Voucher } from '@spartacus/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss']
})
export class CartTotalsComponent implements OnInit {

  MAX_CUSTOMER_COUPON_PAGE = 100;
  couponForm!: FormGroup;
  cartIsLoading$!: Observable<boolean>;
  cart$!: Observable<Cart>;
  cartId!: string;
  applicableCoupons!: CustomerCoupon[];

  private ignoreCloseEvent = false;

  private subscription = new Subscription();

  couponBoxIsActive = false;

  constructor(
    private cartVoucherService: CartVoucherService,
    private formBuilder: FormBuilder,
    private customerCouponService: CustomerCouponService,
    private activeCartService: ActiveCartService
  ) { }

  ngOnInit(): void {
    if (this.customerCouponService) {
      this.customerCouponService.loadCustomerCoupons(
        this.MAX_CUSTOMER_COUPON_PAGE
      );
    }

    this.cart$ = combineLatest([
      this.activeCartService.getActive(),
      this.activeCartService.getActiveCartId(),
      this.customerCouponService.getCustomerCoupons(
        this.MAX_CUSTOMER_COUPON_PAGE
      ),
    ]).pipe(
      tap(
        ([cart, activeCardId, customerCoupons]: [
          Cart,
          string,
          CustomerCouponSearchResult
        ]) => {
          this.cartId = activeCardId;
        }
      ),
      map(([cart]: [Cart, string, CustomerCouponSearchResult]) => cart)
    );

    this.cartIsLoading$ = this.activeCartService
      .isStable()
      .pipe(map((loaded) => !loaded));

    this.cartVoucherService.resetAddVoucherProcessingState();

    this.couponForm = this.formBuilder.group({
      couponCode: ['', Validators.required],
    });

    this.subscription.add(
      this.cartVoucherService
        .getAddVoucherResultSuccess()
        .subscribe((success) => {
          this.onSuccess(success);
        })
    );

    this.subscription.add(
      this.cartVoucherService.getAddVoucherResultError().subscribe((error) => {
        this.onError(error);
      })
    );
  }

  onError(error: boolean) {
    if (error) {
      this.customerCouponService.loadCustomerCoupons(
        this.MAX_CUSTOMER_COUPON_PAGE
      );
      this.cartVoucherService.resetAddVoucherProcessingState();
    }
  }

  onSuccess(success: boolean) {
    if (success) {
      this.couponForm.reset();
      this.cartVoucherService.resetAddVoucherProcessingState();
    }
  }

  getApplicableCustomerCoupons(
    cart: Cart,
    coupons: CustomerCoupon[]
  ): void {
    this.applicableCoupons = coupons || [];
    if (cart.appliedVouchers) {
      cart.appliedVouchers.forEach((appliedVoucher) => {
        this.applicableCoupons = this.applicableCoupons.filter(
          (coupon) => coupon.couponId !== appliedVoucher.code
        );
      });
    }
  }

  applyVoucher(): void {
    if (this.couponForm.valid) {
      this.cartVoucherService.addVoucher(
        this.couponForm.value.couponCode,
        this.cartId
      );
    } else {
      this.couponForm.markAllAsTouched();
    }
  }

  applyCustomerCoupon(couponId: string): void {
    this.cartVoucherService.addVoucher(couponId, this.cartId);
    this.couponBoxIsActive = false;
  }

  close(event: UIEvent): void {
    if (!this.ignoreCloseEvent) {
      this.couponBoxIsActive = false;
      if (event && event.target) {
        (<HTMLElement>event.target).blur();
      }
    }
    this.ignoreCloseEvent = false;
  }

  disableClose(): void {
    this.ignoreCloseEvent = true;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.cartVoucherService.resetAddVoucherProcessingState();
  }

}
