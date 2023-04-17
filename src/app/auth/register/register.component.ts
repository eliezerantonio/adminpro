import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.componen.css'],
})
export class RegisterComponent {
  public formSubmitted = false;

  public registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
    terms: [false, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  createUser() {
    this.formSubmitted = true;

    if (this.registerForm.valid) {
      console.log('Formulario incorreto');
    }
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
}
