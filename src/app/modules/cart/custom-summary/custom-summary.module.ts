import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UrlModule, I18nModule, FeaturesConfigModule } from '@spartacus/core';
import { CartCouponModule, PromotionsModule, IconModule, MediaModule, ItemCounterModule, ModalModule, OutletModule } from '@spartacus/storefront';
import { CustomSummaryComponent } from './custom-summary.component';



@NgModule({
  declarations: [
    CustomSummaryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CartCouponModule,
    ReactiveFormsModule,
    UrlModule,
    NgbModule,
    PromotionsModule,
    I18nModule,
    IconModule,
    MediaModule,
    ItemCounterModule,
    FeaturesConfigModule,
    ModalModule,
    OutletModule,
  ],
  exports: [CustomSummaryComponent],
})
export class CustomSummaryModule { }
