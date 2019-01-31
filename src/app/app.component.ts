import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  // CSS 選擇器，它告訴 Angular 在 Template 中找到相應的位置之後，創建並插入該Component 的實體
  selector: 'app-root',
  // 此 Component 的 Template 檔案位置
  templateUrl: './app.component.html',
  // 此 Component 的 CSS 檔案位置
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

