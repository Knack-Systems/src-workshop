import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, provideConfig, provideDefaultConfig, TranslatePipe, UrlModule } from '@spartacus/core';
import { CustomCartTotalsComponent } from './custom-cart-totals/custom-cart-totals.component';
import { CustomOrderSummaryComponent } from '../custom-order-summary/custom-order-summary.component';
import { CarouselModule, FormErrorsModule, IconModule, MediaModule, ProductReferencesComponent, ProgressButtonModule } from '@spartacus/storefront';
import { CustomApplyCouponComponent } from '../custom-apply-coupon/custom-apply-coupon.component';
import { RouterModule } from '@angular/router';
import { CustomCarasoulComponent } from '../custom-carasoul/custom-carasoul.component';
import { CustomMediaComponent } from '../custom-media/custom-media.component';
import { CustomCarasoulChildComponent } from '../custom-carasoul-child/custom-carasoul-child.component';
import { CustomProdReferComponent } from '../custom-prod-refer/custom-prod-refer.component';


@NgModule({
  declarations: [
    CustomCartTotalsComponent,
    CustomOrderSummaryComponent,
    CustomCarasoulComponent,
    CustomMediaComponent,
    CustomCarasoulChildComponent,
    CustomProdReferComponent
  ],
  imports: [
    CommonModule,
    ProgressButtonModule,
    MediaModule,
    IconModule,
    CarouselModule, MediaModule, RouterModule, UrlModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartTotalsComponent: {
          component: CustomCartTotalsComponent
        },
        OrderSummaryComponent: {
          component:CustomOrderSummaryComponent
        },
        CartApplyCouponComponent: {
          component: CustomApplyCouponComponent
        },
      ImportExportOrderEntriesComponent: {
         component:CustomProdReferComponent
       },

      }
    } as CmsConfig)
  ],
 /*providers: [
  provideConfig(<CmsConfig>{
      cmsComponents: {
        AddToSavedCartsComponent: {
          component: CustomProdReferComponent
        },
      },
    }),
  ],*/
})
export class CustomCartModule { }
