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
  // 列出所有project
  private API_URI_NEW = 'http://apis.yolo.dev.annotation.taieol.tw/api/list/yolo';
  // API根目錄
  readonly AuthUrl = 'http://apis.yolo.dev.annotation.taieol.tw/api';

  constructor(private fetch_project: HttpClient, private jwtHelper: JwtHelperService) {
  }

  // 測試用(另一種寫法)
  getProjectList(): Observable<IProjects[]> {
    // let reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    // return this.fetch_project.get<IProjects[]>(this.API_URI_NEW, {headers: reqHeader});
    return this.fetch_project.get<IProjects[]>(this.API_URI);
  }

  // 呼叫 List API
  ListProjects(token) {
    let reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    reqHeader = reqHeader.append('Authorization', 'Authorization ' + token);
    return this.fetch_project.get(this.API_URI_NEW, {headers: reqHeader});
  }

  // 嘗試登入
  tryLogin(user, password) {
    // use obj will cause less problem
    // @ref: https://github.com/angular/angular/issues/19535
    const data = {
      username: user,
      password: password
    };
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.fetch_project.post(this.AuthUrl + '/Login', data, {headers: reqHeader});
  }

  // 判斷jwt token是否過期
  isTokenExpired(token: string = TOKEN): boolean {
    console.log(token);
    // const jwtStr = this.getToken(token);
    const jwtStr = token;
    console.log(jwtStr);
    if (jwtStr) {
      return this.jwtHelper.isTokenExpired(jwtStr);
    } else {
      return true;        // no token
    }
  }

  // 若token已存在,會自動覆蓋舊的token
  writeToken(value: string, token: string = TOKEN) {
    localStorage.setItem(token, value);
  }

  // 取存在webstorage內的token
  getToken(token: string = TOKEN) {
    return localStorage.getItem(token);
  }

  // 移除存在webstorage內的指定token
  removeToken(token: string = TOKEN) {
    if (this.getToken(token)) {
      localStorage.removeItem(token);
    }
  }
}

