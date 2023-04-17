import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.componen.css'],
})
export class RegisterComponent {
  public registerForm = this.fb.group({
    name: ['Eliezer', [Validators.required, Validators.minLength(4)]],
    email: ['eliezer@gmail.com', [Validators.required]],
    password: ['123456', [Validators.required]],
    password2: ['123456', [Validators.required]],
    terms: [false, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  createUser() {
    console.log(this.registerForm.value);
  }
}
