import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';

import { QuickOrderComponent } from './quick-order/quick-order.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { QualtricsComponentComponent } from './qualtrics-component/qualtrics-component.component';



@NgModule({
  declarations: [QuickOrderComponent, ProductSummaryComponent, QualtricsComponentComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        QuickOrderComponent: {
          component: QuickOrderComponent,
        },
        ProductSummaryComponent: {
          component: ProductSummaryComponent,
        },
        ProductVariantSelectorComponent: {
          component: QualtricsComponentComponent,
        }
      },
    }),
  ]
})
export class CustomComponentsModule { }


