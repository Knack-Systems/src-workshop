import { Component, Input } from '@angular/core';
import { Voucher, CartVoucherService } from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-applied-coupon',
  templateUrl: './custom-applied-coupon.component.html',
  styleUrls: ['./custom-applied-coupon.component.scss']
})
export class CustomAppliedCouponComponent  {

  @Input() vouchers: Voucher[] = [];
  @Input() cartIsLoading = false;
  @Input() isReadOnly = false;

  iconTypes = ICON_TYPE;

  constructor(protected cartVoucherService: CartVoucherService) {}

  public get sortedVouchers(): Voucher[] {
    this.vouchers = this.vouchers || [];
    return this.vouchers.slice().sort((a:any, b:any) => {
      return a.code.localeCompare(b.code);
    });
  }

  removeVoucher(voucherId: any) {
    this.cartVoucherService.removeVoucher(voucherId);
  }

}
