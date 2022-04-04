import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from "./card/card.component";
import {FormComponent} from './form/form.component';
import {FormsModule} from "@angular/forms";
import localeUa from '@angular/common/locales/ru-UA'
import {registerLocaleData} from "@angular/common";


registerLocaleData(localeUa, 'ua')

@NgModule({
  declarations: [
    AppComponent, CardComponent, FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
