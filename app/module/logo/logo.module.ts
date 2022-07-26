import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { OutletRefModule, PageLayoutModule } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    PageLayoutModule,
    OutletRefModule,
  ],
  declarations: [
    LogoComponent
  ],
  exports: [
    LogoComponent
  ]
})
export class LogoModule { }
