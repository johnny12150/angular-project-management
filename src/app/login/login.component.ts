import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login(UserName, password) {
    console.log(UserName, password);
    this.router.navigate(['/']);
  }

}
