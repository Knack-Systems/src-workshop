import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { CustomQualraticsComponent } from './custom-qualratics.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        QualtricsComponent:{
          component:CustomQualraticsComponent

        }
      }
    }as CmsConfig)
  
       
        
  ]
})
export class CustomQualraticsModule { }
