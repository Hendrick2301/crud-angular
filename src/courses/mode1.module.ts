import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mode1RoutingModule } from './mode1-routing.module';
import { Mode1Component } from './courses/mode1.component';


@NgModule({
  declarations: [
    Mode1Component
  ],
  imports: [
    CommonModule,
    Mode1RoutingModule
  ]
})
export class Mode1Module { }
