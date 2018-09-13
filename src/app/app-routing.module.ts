import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';
import {ModelListComponent} from './model-list/model-list.component';

const routes: Routes = [
  {path: 'projects', component: ProjectListComponent},
  {path: 'models', component: ModelListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
