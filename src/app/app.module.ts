import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LowerPipe } from './lower.pipe';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NamesComponent } from './names/names.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LowerPipe,
    AuthentificationComponent,
    NamesComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
