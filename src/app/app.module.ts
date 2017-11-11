import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CompilerOptions } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule, getLocaleId, getLocaleCurrencySymbol } from '@angular/common';
import { loadMessages } from 'devextreme/localization';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import * as fr from '@angular/common/locales/gv'
import { Logger } from './logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, RouterModule.forRoot([

    ], {
        useHash: false
      }),
  ],
  providers: [Logger,
    { provide: LOCALE_ID, useValue: 'gv' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log(fr.default);
    let a = Object.values(fr.default)[0]
    console.log('frrrrrrrrrr', fr);
    console.log(a);
    console.log(getLocaleCurrencySymbol(navigator.language));
  }
}
