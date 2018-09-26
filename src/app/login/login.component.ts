import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FetchProjectService} from '../fetch-project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;


  constructor(private router: Router, private loginService: FetchProjectService) {
  }

  ngOnInit() {
  }

  login(UserName, password) {
    console.log(UserName, password);
    this.loginService.tryLogin(UserName, password).subscribe((res_data: any) => {
      console.log(res_data);
      // localStorage.setItem('userToken',res_data.JWTtoken);
    });
    this.router.navigate(['/']);
  }

}
