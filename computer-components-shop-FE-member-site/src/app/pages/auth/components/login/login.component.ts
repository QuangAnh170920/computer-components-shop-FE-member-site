import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthFacade } from '../../facades/auth.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthInfo } from '../../models/auth.model';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { SessionService } from '../../../../shared/services/session.service';
import { CustomVaidators } from '../../../../shared/validators/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //     loginForm: FormGroup;

  //   constructor(private fb: FormBuilder) {
  //     this.loginForm = this.fb.group({
  //       username: ['', Validators.required],
  //       password: ['', Validators.required],
  //     });
  //   }

  //   onLogin() {
  //     if (this.loginForm.valid) {
  //       console.log('Đăng nhập thành công:', this.loginForm.value);
  //     }
  //   }

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{9,15}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
    }
  }
}
