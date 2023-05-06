import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JInputComponent } from './jinput.component';



@NgModule({
  declarations: [
    JInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    JInputComponent
  ]
})
export class JInputModule { }
