import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductSummaryComponentComponent } from './new-product-summary-component/new-product-summary-component.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [NewProductSummaryComponentComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductSummaryComponent: {
          component: NewProductSummaryComponentComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomPriceaChangeModule {}
