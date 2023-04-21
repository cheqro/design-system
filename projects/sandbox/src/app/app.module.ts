import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JButtonModule} from '@kasso/weather';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    JButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
