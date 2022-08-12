import { ReactiveFormsModule } from '@angular/forms';
import { STQuickOrderModule } from './quick-order/quick-order.module';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { STCartCouponModule } from "./cart-coupon";
import { CartSummaryModule } from "./cart-summary/cart-summary.module";
import { SpartacusModule } from './spartacus/spartacus.module';
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
    STSubtotalComponentModule,
    CartSummaryModule,
    STCartCouponModule,
    STQuickOrderModule,ReactiveFormsModule,
    STImportExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
