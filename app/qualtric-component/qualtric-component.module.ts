import { CmsConfig, provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CMQualtricComponentComponent } from './qualtric-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CMQualtricComponentComponent],
  providers: [
    provideConfig(<CmsConfig>
      {
        cmsComponents :{
          QualtricsComponent :
          {
            component:CMQualtricComponentComponent,
          }
        }
      })

  ]
})
export class CMQualtricComponentModule { }
