import { Injectable } from '@angular/core';
import * as _ from 'lodash'
import { UrlSerializer } from '@angular/router';

@Injectable()
export class Logger {
  private isDevMode: boolean = false;
  constructor() {
    let params = new URLSearchParams(window.location.search);
    if (params.has('devMode')) {
      this.isDevMode = params.get('devMode') === 'true' ? true : false;
    }
  }
  log(message: any) {
    if (this.isDevMode) {
      console.log(message);
    }
  }
} 