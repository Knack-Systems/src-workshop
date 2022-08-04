import { CmsConfig } from '@spartacus/core';
import { ConfigModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';



@NgModule({
  declarations: [
    ContactdetailsComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents : {
        QuickOrderComponent : {
          component : ContactdetailsComponent
        }
      }
    } as CmsConfig)
  ]
})
export class CustomContactModule { }
