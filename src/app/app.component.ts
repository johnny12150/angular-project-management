import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // will appear at app-root (app.component.html as {{title}})
  title = 'app';
  public isCollapsed = false;

  // 引入font awesome並將其加入matIcon
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  onClick(pass) {
    console.log(pass);
  }
}

