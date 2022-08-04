import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from '@spartacus/storefront';
import { NewContactUsModule } from '../modules/contact-us/contact-us.module';
import { ASProductSummaryModule } from '../modules/product-summary/product-summary.module';
import { QualtricsModule } from '../modules/qualtrics/qualtrics.module';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';
import { SpartacusLayoutModule } from './spartacus-layout.module';

@NgModule({
  declarations: [],
  imports: [
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    BaseStorefrontModule,
    SpartacusLayoutModule,
    ASProductSummaryModule,
    NewContactUsModule,
    QualtricsModule,
  ],
  exports: [BaseStorefrontModule],
})
export class SpartacusModule { }
