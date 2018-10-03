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
    this.fetchProjectService.getProjectList()
      .subscribe(project => {
        this.project_list = project['files'];
        // this.project_list[0] = project;
        console.log(project);
      });
    // .subscribe(project => this.project_list = project['files'], project => this.project_list1 = project['files'][0]);
    console.log(this.fetchProjectService.isTokenExpired(TOKEN));
  }

}
