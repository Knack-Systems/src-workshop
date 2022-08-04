import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { CustomComponentModule } from "./custom-component/custom-component.module";
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { CustomProductIntroModule } from './custom-product-intro/custom-product-intro.module';
import { CustomQualraticsComponent } from './custom-qualratics/custom-qualratics.component';
import { CustomQualraticsModule } from './custom-qualratics/custom-qualratics.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    CustomProductIntroComponent,
    CustomQualraticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomComponentModule,
    CustomProductIntroModule,
    CustomQualraticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
