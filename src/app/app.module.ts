import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { STContactUsModule } from "./modules/contact-us/contact-us.module";
import { QMQualtricsModule } from "./modules/qualtrics/qualtrics.module";
import { CustomProductIntroModule } from "./modules/custom-product/custom-product.module";
import { CustomCartTotalsModule } from "./modules/cart/custom-cart-totals/custom-cart-totals.module";
import { CustomCouponModule } from "./modules/cart/custom-coupon/custom-coupon.module";
import { CustomSummaryModule } from "./modules/cart/custom-summary/custom-summary.module";
import { CustomQuickOrderModule } from "./modules/cart/custom-quick-order/custom-quick-order.module";
import { CustomProductReferencesModule } from "./modules/cart/product-references/product-references.module";

@NgModule({
  declarations: [
    AppComponent,
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
    CustomProductIntroModule,
    CustomCartTotalsModule,
    CustomCouponModule,
    CustomQuickOrderModule,
    CustomSummaryModule,
    CustomProductReferencesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
