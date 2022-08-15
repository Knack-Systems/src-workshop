import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CustomContactModule } from './custom-contact/custom-contact.module';
import { CustomProductModule } from './custom-product/custom-product.module';
import { SpartacusModule } from './spartacus/spartacus.module';
import { AddToCartModule } from './add-to-cart/add-to-cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomContactModule,
    CustomProductModule,
    AddToCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
