import { CartSummaryModule } from './../cart-summary/cart-summary.module';
import { CmsConfig, I18nModule, provideConfig, UrlModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STSubtotalComponentComponent } from './subtotal-component.component';
import { RouterModule } from '@angular/router';
import { CartSharedModule, CartCouponModule } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    CartSharedModule,
    I18nModule,
    CartCouponModule,
    CartSummaryModule
  ],
  declarations: [STSubtotalComponentComponent],
  providers: [
    provideConfig(<CmsConfig>{

      cmsComponents: {
        CartTotalsComponent: {
          component: STSubtotalComponentComponent,
        }
      }

    })
      
    
  ]
})
export class STSubtotalComponentModule { }
