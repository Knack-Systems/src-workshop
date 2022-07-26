import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdpImageComponent } from './pdp-image/pdp.component';
import { provideConfig, CmsConfig } from '@spartacus/core';
import { PdpProductIntroComponent } from './pdp-product-intro/pdp-product-intro.component';
import { CarouselModule, MediaModule } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    MediaModule
  ],
  declarations: [
    PdpImageComponent, PdpProductIntroComponent
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        // ProductImagesComponent: {
        //   component: PdpImageComponent,
        //   guards: [  ]
        // },
        // ProductIntroComponent: {
        //   component: PdpProductIntroComponent,
        //   guards: [  ]
        // },

      },
    }),
  ]
})
export class PdpModule { }
