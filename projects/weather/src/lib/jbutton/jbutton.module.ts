import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JButtonComponent } from './jbutton.component';



@NgModule({
  declarations: [
    JButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [JButtonComponent]
})
export class JButtonModule { }
