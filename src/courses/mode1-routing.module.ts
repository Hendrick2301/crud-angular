import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mode1Component } from './courses/mode1.component';

const routes: Routes = [
  { path: '', component: Mode1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mode1RoutingModule { }
