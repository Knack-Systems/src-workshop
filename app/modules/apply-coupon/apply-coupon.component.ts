import { Component, Input, OnInit } from '@angular/core';
import { CustomerCouponService, CartVoucherService, Voucher } from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';

@Component({
  selector: 'app-apply-coupon',
  templateUrl: './apply-coupon.component.html',
  styleUrls: ['./apply-coupon.component.scss']
})
export class ApplyCouponComponent implements OnInit {

  @Input() vouchers: Voucher[] | undefined = [];
  @Input() cartIsLoading: boolean | null = false;
  @Input() isReadOnly: boolean | null = false;

  iconTypes = ICON_TYPE;

  constructor(
    private cartVoucherService: CartVoucherService
  ) { }

  ngOnInit(): void {
  }

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
