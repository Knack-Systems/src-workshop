import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductIntroComponent } from './new-product-intro/new-product-intro.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    NewProductIntroComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: NewProductIntroComponent
        }
      }
    }as CmsConfig)
  ]
})
export class NewProductIntroModule { }
