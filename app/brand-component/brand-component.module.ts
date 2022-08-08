import { CmsConfig, provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CMBrandComponentComponent } from './brand-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CMBrandComponentComponent],
  providers:[
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductIntroComponent: {
          component:CMBrandComponentComponent,
        }
      }
    })
  ]
})
export class CMBrandComponentModule { }
