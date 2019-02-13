import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // 使用model定義user
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor() {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }

    // 避免預設輸入值
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    };
  }

  OnSubmit(form: NgForm) {
    // placeholder
  }

  // 減少第一 row的margin
  Beautify() {
    document.getElementById('firstROW').setAttribute('style', 'margin-bottom: -5px;');
  }

}
