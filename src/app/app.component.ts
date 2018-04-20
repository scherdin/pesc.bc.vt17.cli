import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  environment: string;
  buildNumber: string;
  constructor(){
    this.environment = environment.envName;
    this.buildNumber = environment.build;
  }
}
