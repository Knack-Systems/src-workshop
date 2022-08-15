import { FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartCouponModule, PromotionsModule, IconModule, MediaModule, ItemCounterModule, ModalModule, OutletModule,   } from '@spartacus/storefront';

@NgModule({
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
  declarations: [
    
    CartSummaryComponent,
    
  ],
  exports: [CartSummaryComponent],
})
export class CartSummaryModule { }
