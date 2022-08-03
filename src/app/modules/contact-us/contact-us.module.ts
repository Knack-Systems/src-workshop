import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STContactUsComponent } from './contact-us.component';
import { provideConfig, CmsConfig } from '@spartacus/core';



@NgModule({
  declarations: [STContactUsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig(<CmsConfig> {
      cmsComponents: {
        QuickOrderComponent: {
          component: STContactUsComponent
        }
      }
    })
  ]
})
export class STContactUsModule { }
