import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CustomProductIntroModule } from './custom-product-intro/custom-product-intro.module';
import { NewContactUsModule } from './new-contact-us/new-contact-us.module';
import { SpartacusModule } from './spartacus/spartacus.module';

import { CustomQualraticsModule } from './custom-qualratics/custom-qualratics.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    NewContactUsModule,
    CustomProductIntroModule,
    CustomQualraticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
