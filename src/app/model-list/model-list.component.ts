import {Component, OnInit} from '@angular/core';
import {FetchProjectService} from '../fetch-project.service';

@Component({
  selector: 'app-model-list',
  template: `
    <h1>Template works</h1>
    <div class="card mb-3" style="float: left;max-width: 500px;">
      <div class="card-header text-white bg-success">Model List</div>
      <div class="card-body">
        <div>
          <p *ngFor="let model of model_names; index as i" style="margin-bottom: 0px;">
            <span>{{i}} &emsp; {{model.name}}</span>
          </p>
        </div>
      </div>
    </div>
  `
  // templateUrl: './model-list.component.html',
  // styleUrls: ['./model-list.component.css']
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
