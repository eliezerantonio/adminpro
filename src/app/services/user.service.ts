import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment.development';
import { LoginForm } from '../interfaces/login-form..interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

const base_url = environment.base_url;

declare const google: any;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user!: User;
  constructor(private http: HttpClient, private router: Router) {}

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http
      .get(`${base_url}/login/renew`, {
        headers: {
          'x-token': token,
        },
      })
      .pipe(
        tap((resp: any) => {
          const { email, google, name, role, img='', uid } = resp.usuario;

          console.log(img);

          this.user = new User(name, email, role, '', google, img, uid);

          localStorage.setItem('token', resp.token);
        }),
        map((res) => true),
        catchError((err) => of(false))
      );
  }
  createUser(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  loginGoogle(token: string) {
    return this.http.post(`${base_url}/login/google`, { token }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    google.accounts.id.revoke('eliezerfernandoantonio@gmail.com', () => {
      this.router.navigateByUrl('/');
    });
  }
}
