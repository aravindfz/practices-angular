import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CompilerOptions } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { RouterModule, Router } from '@angular/router';
import { CommonModule, getLocaleCurrencySymbol } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import * as fr from '@angular/common/locales/gv';
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

  constructor(private logger: Logger) {
    this.logger.log(fr.default);
    const a = Object.values(fr.default)[0];
    this.logger.log('frrrrrrrrrr  ', fr.default);
    this.logger.log(a);
    this.logger.log(getLocaleCurrencySymbol(navigator.language));
  }
}
