import { CmsConfig, FeaturesConfigModule, I18nModule, provideConfig, UrlModule } from '@spartacus/core';
import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STQuickOrderComponent } from './quick-order.component';
import { CartCouponModule, IconModule, ItemCounterModule, MediaModule, ModalModule, OutletModule, PromotionsModule } from '@spartacus/storefront';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  declarations: [STQuickOrderComponent],
  providers: [
    provideConfig(<CmsConfig>
      {
       cmsComponents: {
        CartQuickOrderFormComponent :
        {
          component:STQuickOrderComponent
        }
       }
        }
)]
})
export class STQuickOrderModule { }
