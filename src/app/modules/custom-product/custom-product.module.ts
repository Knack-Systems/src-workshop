import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductComponent } from './custom-product.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';

@NgModule({
  declarations: [CustomProductComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomProductIntroModule {}
