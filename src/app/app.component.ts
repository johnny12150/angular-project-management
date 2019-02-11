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
  // 判斷按鈕是否被按過
  clicked = 0;

  // 引入font awesome並將其加入matIcon
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  // 測試pass進去的isCollapsed值
  public onClick(collapse_status) {
    collapse_status = !collapse_status;
    if (this.clicked) {
      // 被按過表示底下的component位置已經被移動
      const nav = document.getElementsByClassName('navbar navbar-expand-lg navbar-dark bg-dark')[0];
      // 移除之前移動的痕跡
      nav.setAttribute('style', 'margin-bottom: 0px;');
      this.clicked = 0;
    }
    if (collapse_status) {
      // 取nav-bar
      const nav = document.getElementsByClassName('navbar navbar-expand-lg navbar-dark bg-dark')[0];
      // @ref: https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom
      // 確保nav-bar toggle的視窗不會與其他component重疊
      nav.setAttribute('style', 'margin-bottom: 150px;');
      this.clicked = 1;
    }
    return collapse_status;
  }

}

