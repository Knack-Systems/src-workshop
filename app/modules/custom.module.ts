import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { PdpProductSummaryComponent } from './pdp-product-summary/pdp-product-summary.component';
import { QuickOrderComponent } from './quick-order/quick-order.component';
import { QualtricsComponent } from './qualtrics/qualtrics.component';
import { PdpIntroComponent } from './pdp-intro/pdp-intro.component';
import { StarRatingModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    QuickOrderComponent,
    PdpProductSummaryComponent,
    QualtricsComponent,
    PdpIntroComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule
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
          component: QualtricsComponent
        },
        ProductIntroComponent: {
          component: PdpIntroComponent,
        },
      }
    })
  ],
})
export class CustomModule { }
