import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Voucher, CartVoucherService } from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';


@Component({
  selector: 'cx-applied-coupons',
  templateUrl: './applied-coupons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppliedCouponsComponent {
  @Input()
  vouchers!: Voucher[];
  @Input()
  cartIsLoading?:boolean = false;
  @Input()
  isReadOnly = false;

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
