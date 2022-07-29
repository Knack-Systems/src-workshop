import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { CustomQuickOrderComponent } from './custom-quick-order/custom-quick-order.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent:{
        //  component: CustomProdIntroComponent
        },
        ProductSummaryComponent: {
        //  component:CustomPdpComponent
       //  component:()=> import('./custom-product-summary/custom-product-summary.component').then(m=>CustomProductSummaryComponent)
        },
        QuickOrderComponent:{
        component: CustomQuickOrderComponent
      },
      QualtricsEmbeddedFeedbackComponent: {
       // component: CustomQualtricsComponent
      }
      }
    } as CmsConfig)
  ]
})
export class CustomMyStoreModule { }
