import { Injectable } from '@angular/core';
import * as _ from 'lodash'
import { UrlSerializer, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class Logger {
  private isDevMode: boolean = false;
  constructor() {
    let params = new URLSearchParams(window.location.search);
    if (params.has('devMode')) {
      this.isDevMode = params.get('devMode') === 'true' ? true : false;
    }
  }
  log(message: any | object, ...optionalParams: any[]) {
    if (this.isDevMode) {
      optionalParams.length > 0 ? console.log(message, optionalParams) : console.log(message);
    }
  }
} 