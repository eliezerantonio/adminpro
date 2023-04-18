import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  public formSubmitted = false;

  public loginForm = this.fb.group(
    {
      email: [
        localStorage.getItem('email') || '',
        [Validators.required, Validators.email],
      ],
      password: ['', [Validators.required]],
      remember: [false],
    },
    {
      validators: this.equalPasswords(),
    }
  );

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.loginForm.value).subscribe(
      (resp) => {
        if (this.loginForm.get('remember')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        }
      },
      (error) => {
        Swal.fire('Error', error.error.msg, error);
      }
    );

    // this.router.navigateByUrl('/');
  }
  equalPasswords() {}
}
