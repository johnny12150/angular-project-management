import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// for angular6/ RxJS6
// @ref: https://stackoverflow.com/questions/49840152/i-get-an-error-when-learning-angular-has-no-exported-member-observable
import {Observable, of} from 'rxjs';
// 引入外部interface
import {IProjects} from './projects';
import {JwtHelperService} from '@auth0/angular-jwt';

export const TOKEN = 'access_token';

@Injectable({
  providedIn: 'root'
})

export class FetchProjectService {
  private API_URI = 'http://img-server.yolo.dev.annotation.taieol.tw';
  readonly AuthUrl = 'http://apis.yolo.dev.annotation.taieol.tw/api';

  constructor(private fetch_project: HttpClient, private jwtHelper: JwtHelperService) {
  }

  getProjectList(): Observable<IProjects[]> {
    return this.fetch_project.get<IProjects[]>(this.API_URI);
  }

  tryLogin(user, password) {
    // const data = 'username=' + user + '&password=' + password;
    // use obj will cause less problem
    // @ref: https://github.com/angular/angular/issues/19535
    const data = {
      username: user,
      password: password
    };
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.fetch_project.post(this.AuthUrl + '/Login', data, {headers: reqHeader});
  }

  isTokenExpired(token: string = TOKEN): boolean {
    let jwtStr = this.getToken(token);
    if (jwtStr) {
      return this.jwtHelper.isTokenExpired(jwtStr);  // token expired?
    } else {
      return true;        // no token
    }
  }

  writeToken(value: string, token: string = TOKEN) {
    localStorage.setItem(token, value);
  }

  getToken(token: string = TOKEN) {
    return localStorage.getItem(token);
  }

  removeToken(token: string = TOKEN) {
    if (this.getToken(token)) {
      localStorage.removeItem(token);
    }
  }
}

