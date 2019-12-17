import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private webService: WebService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.webService.login(this.loginForm.value);
    this.loginForm.reset();
    this.router.navigate(['']);
  }

  isInvalid(control) {
    return this.loginForm.controls[control].invalid && this.loginForm.controls[control].touched;
  }

  isUnTouched() {
    return this.loginForm.controls.name.pristine ||
      this.loginForm.controls.review.pristine;
  }

  isIncomplete() {
    return this.isInvalid('username') ||
      this.isInvalid('password') ||
      this.isUnTouched();
  }

}
