import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormCardComponent } from './form-card/form-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAddComponent,
    FormCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
