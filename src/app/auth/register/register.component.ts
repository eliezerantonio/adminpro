import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.componen.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  public formSubmitted = false;

  public registerForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      terms: [false, [Validators.required]],
    },
    {
      validators: this.equalPasswords('password', 'password2'),
    }
  );

  createUser() {
    this.formSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.createUser(this.registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        Swal.fire('Erro!', error.error.msg, 'error');
      }
    );
  }

  invalidField(field: string) {
    if (this.registerForm.get(field)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  acceptTerms() {
    return !this.registerForm.get('terms')?.value && this.formSubmitted;
  }

  invalidPassword() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  equalPasswords(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass1Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ diferent: true });
      }
    };
  }
}
