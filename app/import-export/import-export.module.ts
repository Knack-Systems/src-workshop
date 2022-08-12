import { CmsConfig, provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STImportExportComponent } from './import-export.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [STImportExportComponent],
  providers:[
    provideConfig(<CmsConfig>{
      cmsComponents:{
        ImportExportOrderEntriesComponent:{
          component:STImportExportComponent
        }
      }
    })
  ]
})
export class STImportExportModule { }
