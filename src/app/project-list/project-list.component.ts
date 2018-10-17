import {Component, OnInit} from '@angular/core';
import {FetchProjectService, TOKEN} from '../fetch-project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  // project_list = ['default', 'one'];
  public project_list = [];

  // 宣告注入的service
  constructor(private fetchProjectService: FetchProjectService) {
  }

  ngOnInit() {
    // 呼叫service取資料, 另外一種做法是直接在component使用httpClient
    this.fetchProjectService.ListProjects(this.fetchProjectService.getToken())
      .subscribe(project => {
        this.project_list = project['files'];
        console.log(project);
      }, err => {
        console.log(err);
        console.log(err.error.text);
      });

    console.log(this.fetchProjectService.getToken());
  }

}
