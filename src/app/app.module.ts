import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { STContactUsModule } from "./modules/contact-us/contact-us.module";
import { QMQualtricsComponent } from './modules/qualtrics/qualtrics.component';
import { QMQualtricsModule } from "./modules/qualtrics/qualtrics.module";
import { CustomProductIntroModule } from "./modules/custom-product/custom-product.module";

@NgModule({
  declarations: [
    AppComponent,
    QMQualtricsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    STContactUsModule,
    QMQualtricsModule,
    CustomProductIntroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
