import { ILogin } from './../shared/interfaces/login.interface';
import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  API_URL = 'http://localhost:3000';
  TOKEN_KEY = 'token';
  USER_ROLE = 'user_role';
  notification: string;

  constructor(private http: HttpClient, private router: Router) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  setUserRole(user: any) {
    localStorage.setItem(this.USER_ROLE, user);
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  removeUserRole() {
    localStorage.removeItem(this.USER_ROLE);
  }

  get isAuthenticated() {
    return localStorage.getItem(this.TOKEN_KEY) != null;
  }

  get isAdmin() {
    return localStorage.getItem(this.USER_ROLE) === 'ADMIN';
  }

  setStorageVariables(data) {
    this.setToken(data.access_token);
    this.setUserRole(data.user.role);
  }

  logout() {
    this.removeToken();
    this.removeUserRole();
    this.router.navigateByUrl('/auth/login');
  }

  login(user: ILogin) {
    return this.http.post(this.API_URL + '/login', user).subscribe((res: any) => {
      this.router.navigateByUrl('/');
    }, (res: any) => {
      this.notification = res.message;
    });
  }
}
