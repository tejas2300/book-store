import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  /**
   * {
   *  userName: '',
   *  password: '',
   *  confirmPassword: '',
   *  email: '',
   * }
   */

  registerForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    email: new FormControl(''),
    aboutMe: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    })
  });



  constructor() {}

  ngOnInit(): void {}

  register(){
    console.log(this.registerForm.value);
  }
}
