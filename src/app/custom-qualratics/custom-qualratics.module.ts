import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomQualraticsComponent } from './custom-qualratics/custom-qualratics.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomQualraticsComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        QualtricsComponent: {
          component: CustomQualraticsComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomQualraticsModule {}
