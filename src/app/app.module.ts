import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ModelListComponent} from './model-list/model-list.component';
import {AppRoutingModule} from './/app-routing.module';

import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ModelListComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
