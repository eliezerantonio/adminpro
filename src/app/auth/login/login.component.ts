import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.

  @ViewChild('googleBtn')
  googleBtn!: ElementRef;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  public formSubmitted = false;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.googleInit();
  }

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

  googleInit() {
    google.accounts.id.initialize({
      client_id:
        '616435849492-ppq89h1eho6t5due704ehkeqir2ubse1.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentailResponse(response),
    });
    console.log(google);

    google.accounts.id.renderButton(this.googleBtn?.nativeElement, {
      theme: 'outline',
      size: 'large',
    });
  }

  handleCredentailResponse(response: any) {
    console.log('Encoded JWT ID Token: ' + response.credential);
    this.userService.loginGoogle(response.credential).subscribe((resp) => {
      this.router.navigateByUrl('/');
    });
  }

  login() {
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

    this.router.navigateByUrl('/');
  }
  equalPasswords() {}
}
