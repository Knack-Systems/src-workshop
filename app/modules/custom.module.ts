import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, I18nModule, provideConfig, UrlModule } from '@spartacus/core';
import { PdpProductSummaryComponent } from './pdp-product-summary/pdp-product-summary.component';
import { QuickOrderComponent } from './quick-order/quick-order.component';
import { QualtricsComponent } from './qualtrics/qualtrics.component';
import { PdpIntroComponent } from './pdp-intro/pdp-intro.component';
import { CartCouponModule, IconModule, StarRatingModule } from '@spartacus/storefront';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CartTotalsComponent } from './cart-totals/cart-totals.component';
import { QuickOrderSectionComponent } from './quick-order-section/quick-order-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImportExportComponent } from './import-export/import-export.component';
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    QuickOrderComponent,
    PdpProductSummaryComponent,
    QualtricsComponent,
    PdpIntroComponent,
    OrderSummaryComponent,
    CartTotalsComponent,
    QuickOrderSectionComponent,
    ImportExportComponent,
    ApplyCouponComponent,
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    UrlModule,
    CartCouponModule,
    ReactiveFormsModule,
    I18nModule,
    RouterModule,
    FormsModule,
    NgbModule,
    IconModule
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents:{
        QuickOrderComponent:{
          component: QuickOrderComponent,
        },
        ProductSummaryComponent:{
          component: PdpProductSummaryComponent,
        },
        QualtricsEmbeddedFeedbackComponent: {
          component: QualtricsComponent,
        },
        ProductIntroComponent: {
          component: PdpIntroComponent,
        },
        CartTotalsComponent: {
          component: OrderSummaryComponent,
        },
        CartQuickOrderFormComponent: {
          component: QuickOrderSectionComponent,
        },
        CartApplyCouponComponent: {
          component: CartTotalsComponent,
        },
        ImportExportOrderEntriesComponent: {
          component: ImportExportComponent,
        },
      }
    })
  ],
})
export class CustomModule { }
