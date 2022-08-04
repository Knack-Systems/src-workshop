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

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
