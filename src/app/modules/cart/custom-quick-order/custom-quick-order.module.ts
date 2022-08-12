import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomQuickOrderComponent } from './custom-quick-order.component';
import { ConfigModule, FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorsModule, IconModule, ItemCounterModule, MediaModule, ModalModule, OutletModule, PromotionsModule } from '@spartacus/storefront';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CustomQuickOrderComponent],
  imports: [
    CommonModule,
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
    FormErrorsModule,
    ConfigModule.withConfig({
      cmsComponents: {CartQuickOrderFormComponent: {
        component: CustomQuickOrderComponent,
      },}
    })
  ]
})
export class CustomQuickOrderModule { }
