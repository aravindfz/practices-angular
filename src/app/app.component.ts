import { Component, CompilerOptions } from '@angular/core';
import { CompilerConfig } from '@angular/compiler/src/config';
import { DxDataGridComponent } from 'devextreme-angular';
import { Logger } from './logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  dxDataGridComponent: DxDataGridComponent;
  constructor(private logger: Logger) {
    this.logger.log('something');
  }
}
