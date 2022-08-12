import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, UrlModule } from '@spartacus/core';
import { CarouselModule, MediaModule } from '@spartacus/storefront';
import { CustomProductReferencesComponent } from './product-references.component';

@NgModule({
  declarations: [CustomProductReferencesComponent],
  imports: [
    CommonModule,
     CarouselModule,
      MediaModule,
       RouterModule,
        UrlModule,
        ConfigModule.withConfig({
          cmsComponents: {ImportExportOrderEntriesComponent: {
            component: CustomProductReferencesComponent,
          },}
        })
      ],
})
export class CustomProductReferencesModule { }
