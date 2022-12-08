import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherPageRoutingModule } from './another-page-routing.module';
import { AnotherPageComponent } from './another-page.component';


@NgModule({
  declarations: [
    AnotherPageComponent
  ],
  imports: [
    CommonModule,
    AnotherPageRoutingModule
  ]
})
export class AnotherPageModule { }
