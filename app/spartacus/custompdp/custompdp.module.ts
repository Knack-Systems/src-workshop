import { ConfigModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { StarRatingModule } from '@spartacus/storefront';
import { CustomStarratingComponent } from './custom-starrating/custom-starrating.component';
import { QualtricsComponent } from './qualtrics/qualtrics.component';



@NgModule({
  declarations: [
    ProductDescriptionComponent,
    CustomStarratingComponent,
    QualtricsComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents : {
        ProductIntroComponent : {
          component : ProductDescriptionComponent
        },
        ProductSummaryComponent : {
          component : CustomStarratingComponent
        },
        QualtricsEmbeddedFeedbackComponent : {
          component : QualtricsComponent
        }
      }
    })
  ]
})
export class CustompdpModule { }
