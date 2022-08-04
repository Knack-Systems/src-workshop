import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualtricsComponent } from './qualtrics.component';
import { CmsConfig, provideConfig } from '@spartacus/core';

@NgModule({
  imports: [CommonModule],
  declarations: [QualtricsComponent],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductReferencesComponent: {
          component: QualtricsComponent,
          guards: [],
        },
      },
    }),
  ],
})
export class QualtricsModule {}
