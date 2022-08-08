import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContactComponent } from './custom-contact/custom-contact.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';

@NgModule({
  declarations: [CustomContactComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CMSParagraphComponent: {
          component: CustomContactComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomContactModule {}
// Coming at 2 places bcs - typecode is same, and can't find flextype
