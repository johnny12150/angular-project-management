import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  project_list = ['default', 'one'];

  constructor() {
  }

  ngOnInit() {
  }

}
