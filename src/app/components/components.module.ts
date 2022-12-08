import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmsButtonComponent } from './ems-button/ems-button.component';



@NgModule({
  declarations: [
    EmsButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EmsButtonComponent]
})
export class ComponentsModule { }
