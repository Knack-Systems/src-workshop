import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CustomComponentComponent } from './custom-component.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents :{
        QuickOrderComponent:{
         component: CustomComponentComponent
        }
      }
    })
  ]
})
export class CustomComponentModule { }
