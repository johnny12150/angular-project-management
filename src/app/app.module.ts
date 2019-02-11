import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';

// component
import {AppComponent} from './app.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ModelListComponent} from './model-list/model-list.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {ModelConfigComponent} from './model-config/model-config.component';

import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// 裝飾器（Decorator）
// 傳入裝飾器裡的物件，在 Angular 裡稱作中繼資料 （MetaData） ，用來告訴 Angular 要怎麼樣處理接下來的的類別
@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ModelListComponent,
    ModelConfigComponent,
    ProjectDetailComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    JwtModule.forRoot({ // todo: 修正import的whitelist
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
