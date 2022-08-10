import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { CustomCartModule } from "./custom-my-store/custom-cart/custom-cart.module";
import { CustomMyStoreModule } from "./custom-my-store/custom-my-store.module";
import { SpartacusModule } from './spartacus/spartacus.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCartQuickModule } from './custom-my-store/custom-cart-quick/custom-cart-quick.module';
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
    CustomMyStoreModule,
    CustomCartModule,
    BrowserAnimationsModule,
    CustomCartQuickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
