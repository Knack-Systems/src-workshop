import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCouponComponent } from './custom-coupon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule, ConfigModule } from '@spartacus/core';
import { IconModule, FormErrorsModule } from '@spartacus/storefront';
import { CustomAppliedCouponComponent } from './custom-applied-coupon/custom-applied-coupon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CustomCouponComponent, CustomAppliedCouponComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    IconModule,
    FormErrorsModule,
    NgbModule,
    ConfigModule.withConfig({
      cmsComponents: {CartApplyCouponComponent: {
        component: CustomCouponComponent,
      },}
    })
  ],
})
export class CustomCouponModule { }
