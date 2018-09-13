import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ModelListComponent} from './model-list/model-list.component';
import {AppRoutingModule} from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ModelListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
