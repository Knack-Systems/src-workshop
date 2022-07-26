import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from "@spartacus/storefront";
import { PdpModule } from '../module/pdp/pdp.module';
import { ASProductSummaryModule } from '../module/product-summary/product-summary.module';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';
import { SpartacusLayoutModule } from './spartacus-layout.module';

@NgModule({
  declarations: [

  ],
  imports: [
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    SpartacusLayoutModule,
    BaseStorefrontModule,
    ASProductSummaryModule,
    PdpModule
  ],
  exports: [BaseStorefrontModule]
})
export class SpartacusModule { }
