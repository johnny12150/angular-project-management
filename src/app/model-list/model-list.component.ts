import {Component, OnInit} from '@angular/core';
import {FetchProjectService} from '../fetch-project.service';

@Component({
  selector: 'app-model-list',
  // template: `
  //   <div class="card mb-3" style="float: left;max-width: 500px;margin-top: 10px;">
  //     <div class="card-header text-white bg-info">
  //       <mat-icon>list</mat-icon>
  //       <span style="position: absolute; margin-top: -2px;margin-left: 5px; ">Model List</span>
  //     </div>
  //     <div class="card-body">
  //       <div>
  //         <!-- 會產生多個包含span的p -->
  //         <div *ngFor="let model of model_names; index as i" style="margin-bottom: 0px;">
  //           <mat-icon>pie_chart</mat-icon>
  //           <span style="position: relative; top: -5px;"> {{i}}</span> &emsp;
  //           <span style="position: relative; top: -6px;"> {{model.name}}</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // `
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  public model_list = [];
  model_names = [];

  // 宣告注入的service
  constructor(private fetchModelService: FetchProjectService) {
  }

  ngOnInit() {
    this.fetchModelService.getProjectList()
      .subscribe(project => {
        this.model_list[0] = project;
        this.model_names = this.model_list[0].files;
        console.log(this.model_names);
      });
  }

}
