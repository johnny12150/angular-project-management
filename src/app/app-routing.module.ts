import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';
import {ModelListComponent} from './model-list/model-list.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'projects', component: ProjectListComponent},
  {path: 'models', component: ModelListComponent},
  {
    path: 'Login', component: UserComponent,
    children: [{path: '', component: LoginComponent}]
  },
  {
    path: 'register', component: UserComponent,
    children: [{path: '', component: RegisterComponent}]
  },
  // 每頁都會有這個component
  // {path: '', component: ProjectDetailComponent, outlet: 'detail' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
