import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewContactUsComponent } from './new-contact-us/new-contact-us.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [NewContactUsComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        QuickOrderComponent: {
          component: NewContactUsComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class NewContactUsModule {}
