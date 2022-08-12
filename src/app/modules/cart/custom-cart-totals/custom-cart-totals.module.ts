import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartTotalsComponent } from './custom-cart-totals.component';
import { provideDefaultConfig, CmsConfig, I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { CartSharedModule, CartCouponModule } from '@spartacus/storefront';
import { CustomSummaryModule } from '../custom-summary/custom-summary.module';



@NgModule({
  declarations: [CustomCartTotalsComponent],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    CartSharedModule,
    I18nModule,
    CartCouponModule,
    CustomSummaryModule
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CartTotalsComponent: {
          component: CustomCartTotalsComponent,
        },
      },
    }),
  ],
})
export class CustomCartTotalsModule { }
