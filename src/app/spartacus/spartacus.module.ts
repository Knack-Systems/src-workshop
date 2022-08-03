import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from '@spartacus/storefront';
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
  ],
  exports: [BaseStorefrontModule],
})
export class SpartacusModule {}
