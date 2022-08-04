import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductComponent } from './custom-product/custom-product.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { ProductIntroComponent } from './product-intro/product-intro.component';
import { StarRatingModule } from '@spartacus/storefront';
import { UpsellingComponent } from './upselling/upselling.component';

@NgModule({
  declarations: [
    CustomProductComponent,
    ProductIntroComponent,
    UpsellingComponent,
    UpsellingComponent,
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductSummaryComponent: {
          component: CustomProductComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: ProductIntroComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        QualtricsComponent: {
          component: UpsellingComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomProductModule {}
