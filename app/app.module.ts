import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { provideConfig, CmsConfig } from "@spartacus/core";
import { AppRoutingModule, BannerComponent } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { LogoModule } from "./module/logo/logo.module";
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    LogoModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
