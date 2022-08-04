import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const newLocal: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(newLocal)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
