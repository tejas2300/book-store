import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'lms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  userNameValue = '';
  passwordValue = ''
  userName = new FormControl('usr_' + this.generateUserName());
  password = new FormControl(this.generatePassword());

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userName.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  generateUserName() {
    for (let i = 0; i < 6; i++) {
      this.userNameValue += this.chars.charAt(
        Math.floor(Math.random() * this.chars.length)
      );
    }
    return this.userNameValue;
  }

  generatePassword() {
    this.passwordValue = '';
    for (let i = 0; i < 10; i++) {
      this.passwordValue += this.chars.charAt(
        Math.floor(Math.random() * this.chars.length)
      );
    }
    return this.passwordValue;
  }

  changeUserName(){
    // this.userName.setValue('')
    this.userNameValue = ''
    this.userName.setValue('usr_' + this.generateUserName());
  }
}
