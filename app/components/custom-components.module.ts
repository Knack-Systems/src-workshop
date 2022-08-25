import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, OccConfig } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartTotalService } from './carts-total.service';
import { QuickOrderComponent } from './quick-order/quick-order.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { QualtricsComponentComponent } from './qualtrics-component/qualtrics-component.component';
import { CartTotalComponent } from './cart-total-component/cart-total.component';
import { CartApplyCouponComponent } from './cart-apply-coupon/cart-apply-coupon.component';
import { CartQuickOrderFormComponent } from './cart-quick-order-form/cart-quick-order-form.component';



@NgModule({
  declarations: [QuickOrderComponent, ProductSummaryComponent, QualtricsComponentComponent, 
    CartTotalComponent, CartApplyCouponComponent, CartQuickOrderFormComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    FormsModule, 
    ReactiveFormsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        QuickOrderComponent: {
          component: QuickOrderComponent
        },
        ProductSummaryComponent: {
          component: ProductSummaryComponent
        },
        ProductVariantSelectorComponent: {
          component: QualtricsComponentComponent
        },
        CartTotalsComponent: {
          component: CartTotalComponent
        },
        CartApplyCouponComponent: {
          component: CartApplyCouponComponent
        },
        CartQuickOrderFormComponent: {
          component: CartQuickOrderFormComponent
        }
      },
    }),
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            addBundleToCart:
              'demoAppProduct/applyPromocode'
          },
        },
      },
    } as OccConfig),
  ],
  providers: [CartTotalService]
})
export class CustomComponentsModule { }


