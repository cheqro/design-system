import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JButtonModule} from '@kasso/weather';
import {JInputModule} from '../../../weather/src/lib/jinput/jinput.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    JButtonModule,
    JInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
