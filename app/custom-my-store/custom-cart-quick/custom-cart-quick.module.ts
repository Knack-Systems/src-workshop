import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { CustomCartQuickComponent } from './custom-cart-quick.component';
import { FormErrorsModule } from '@spartacus/storefront';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, 
    ReactiveFormsModule, 
    I18nModule, 
    FormErrorsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartQuickOrderFormComponent: {
             component: CustomCartQuickComponent
           },
      }
    } as CmsConfig),
    ],
  /*providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CartQuickOrderFormComponent: {
          component: CustomCartQuickComponent,
        },
      },
    }),
  ],*/
  declarations: [CustomCartQuickComponent],
  exports: [CustomCartQuickComponent]
})
export class CustomCartQuickModule { }
