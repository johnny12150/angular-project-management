import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// for angular6/ RxJS6
// @ref: https://stackoverflow.com/questions/49840152/i-get-an-error-when-learning-angular-has-no-exported-member-observable
import {Observable, of} from 'rxjs';
// 引入外部interface
import {IProjects} from './projects';

@Injectable({
  providedIn: 'root'
})

export class FetchProjectService {
  private API_URI = 'http://img-server.yolo.dev.annotation.taieol.tw';
  readonly AuthUrl = 'http://apis.yolo.dev.annotation.taieol.tw/api';

  constructor(private fetch_project: HttpClient) {
  }

  getProjectList(): Observable<IProjects[]> {
    return this.fetch_project.get<IProjects[]>(this.API_URI);
  }

  tryLogin(user, password) {
    const data = 'username=' + user + '&password=' + password;
    const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded'});
    return this.fetch_project.post(this.AuthUrl + '/Login', data, {headers: reqHeader});
  }
}

