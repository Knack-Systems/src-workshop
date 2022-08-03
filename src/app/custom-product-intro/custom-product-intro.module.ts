import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductComponentComponent } from './custom-product-component/custom-product-component.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';

@NgModule({
  declarations: [CustomProductComponentComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductComponentComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomProductIntroModule {}
