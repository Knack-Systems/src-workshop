import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { CustomQuickOrderComponent } from './custom-quick-order/custom-quick-order.component';
import { CustomProdIntroComponent } from './custom-prod-intro/custom-prod-intro.component';
import { StarRatingModule } from '@spartacus/storefront';
import { CustomPdpComponent } from './custom-pdp/custom-pdp.component';
import { CustomQualtricsComponent } from './custom-qualtrics/custom-qualtrics.component';



@NgModule({
  declarations: [
    CustomProdIntroComponent,
    CustomPdpComponent,
    CustomQualtricsComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent:{
          component: CustomProdIntroComponent
        },
        ProductSummaryComponent: {
        component:CustomPdpComponent
       //  component:()=> import('./custom-product-summary/custom-product-summary.component').then(m=>CustomProductSummaryComponent)
        },
        QuickOrderComponent:{
        component: CustomQuickOrderComponent
      },
      QualtricsEmbeddedFeedbackComponent: {
        component: CustomQualtricsComponent
      }
      }
    } as CmsConfig)
  ]
})
export class CustomMyStoreModule { }
