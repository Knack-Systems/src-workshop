import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewContactUsComponent } from './contact-us.component';
import { provideConfig, CmsConfig } from '@spartacus/core';

@NgModule({
  imports: [CommonModule],
  declarations: [NewContactUsComponent],
  exports: [NewContactUsComponent],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        QuickOrderComponent: {
          component: NewContactUsComponent,
          guards: [],
        },
      },
    }),
  ],
})
export class NewContactUsModule {}
