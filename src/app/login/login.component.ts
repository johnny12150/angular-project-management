import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FetchProjectService, TOKEN} from '../fetch-project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;

  // 使用service
  constructor(private router: Router, private loginService: FetchProjectService) {
  }

  ngOnInit() {
  }

  login(UserName, password) {
    console.log(UserName, password);
    // 使用service內的function做登入
    this.loginService.tryLogin(UserName, password).subscribe((res_data: any) => {
      console.log(res_data);
      if (res_data.code === 200) {
        // 使用service內的function將token存在client端
        this.loginService.writeToken(res_data.JWTtoken, TOKEN);
        // 導回首頁
        this.router.navigate(['/']);
      }
    });
  }

}
