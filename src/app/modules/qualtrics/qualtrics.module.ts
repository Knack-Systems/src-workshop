import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QMQualtricsComponent } from './qualtrics.component';
import { provideConfig, CmsConfig } from '@spartacus/core';



@NgModule({
  declarations: [QMQualtricsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig(<CmsConfig>{
        cmsComponents: {
          QualtricsComponent: {
                component: QMQualtricsComponent,
                guards: []
            },
        }
    })
]
})
export class QMQualtricsModule { }
