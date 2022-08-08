import { CmsConfig } from '@spartacus/core';
import { provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ASContactComponentComponent } from './contact-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ASContactComponentComponent],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        QuickOrderComponent :{
          component:ASContactComponentComponent,
        }
      }
    })
  ]
 
})
export class ASContactComponentModule { }
