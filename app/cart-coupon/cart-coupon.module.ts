import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CmsConfig, I18nModule, provideConfig,  } from '@spartacus/core';
import { IconModule, FormErrorsModule,  } from '@spartacus/storefront';
import { AppliedCouponsComponent } from './applied-coupons/applied-coupons.component';
import { STCartCouponComponent } from './cart-coupon.component';

@NgModule({
  declarations: [STCartCouponComponent, AppliedCouponsComponent],
  exports: [STCartCouponComponent, AppliedCouponsComponent],
  imports: [    
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    IconModule,
    FormErrorsModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        CartApplyCouponComponent: {
          component: STCartCouponComponent,
        },
      },
    }),
  ],
})
export class STCartCouponModule {}
