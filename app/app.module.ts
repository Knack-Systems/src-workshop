import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { PPContactUsModule } from "./contact-us/contact-us.module";
import { CustomQualraticsComponent } from './custom-qualratics/custom-qualratics.component';
import { CustomQualraticsModule } from "./custom-qualratics/custom-qualratics.module";
// import { CustomAddToCartButtonComponent } from './custom-add-to-cart-button/custom-add-to-cart-button.component';
import { NewProductIntroModule } from "./new-product-intro/new-product-intro.module";
import { SpartacusModule } from './spartacus/spartacus.module';





@NgModule({
  declarations: [
    AppComponent,
    CustomQualraticsComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    PPContactUsModule,
    NewProductIntroModule,
    CustomQualraticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
