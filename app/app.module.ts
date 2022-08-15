import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StarRatingModule } from "@spartacus/storefront";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { STCartCouponModule } from "./cart-coupon";
import { CartSummaryModule } from "./cart-summary/cart-summary.module";
import { STSubtotalComponentModule } from "./subtotal-component/subtotal-component.module";
import { STImportExportModule } from './import-export/import-export.module';

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
    StarRatingModule,
    STCartCouponModule,
    CartSummaryModule,
    STSubtotalComponentModule,
    STImportExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
