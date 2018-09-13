import {Component, OnInit} from '@angular/core';
import {FetchProjectService} from '../fetch-project.service';

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
    this.fetchProjectService.getProjectList()
      .subscribe(project => this.project_list = project['files']);
    console.log(this.project_list);
  }

}
