import { CmsConfig, provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STProductSummaryComponent } from './product-summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [STProductSummaryComponent],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductSummaryComponent: {
          component: STProductSummaryComponent,
          guards: [],
        },
      },
    }),
  ],
})
export class ASProductSummaryModule {}
