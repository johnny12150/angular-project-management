import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';
import {ModelListComponent} from './model-list/model-list.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';

const routes: Routes = [
  {path: 'projects', component: ProjectListComponent},
  {path: 'models', component: ModelListComponent},
  // 每頁都會有這個component
  // {path: '', component: ProjectDetailComponent, outlet: 'detail' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
