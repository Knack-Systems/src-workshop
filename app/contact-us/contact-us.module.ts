import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { PPContactUsComponent } from './contact-us.component';





@NgModule({
  
  imports: [
    CommonModule
  ],
  
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CMSParagraphComponent: {
          component: PPContactUsComponent,
        },
    
      },
    }),
  ],
  declarations: [PPContactUsComponent],
  exports: [PPContactUsComponent],
 
})
export class PPContactUsModule { }
