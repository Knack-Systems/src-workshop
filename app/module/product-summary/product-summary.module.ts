import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STProductSummaryComponent } from './product-summary.component';
import { AuthGuard, CmsConfig, provideConfig, provideDefaultConfig } from '@spartacus/core';
import { ViewConfig, defaultViewConfig, ProductListComponent } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [STProductSummaryComponent],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        // ProductIntroComponent: {
        //   component: STProductSummaryComponent,
        //   guards: [  ]
        // },

      },
    }),
  ]
})
export class ASProductSummaryModule { }
