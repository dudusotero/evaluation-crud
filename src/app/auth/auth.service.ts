import { ILogin } from './../interfaces/login.interface';
import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  API_URL = 'http://localhost:3000';
  TOKEN_KEY = 'token';
  notification: string;

  constructor(private http: HttpClient, private router: Router) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return localStorage.getItem(this.TOKEN_KEY) != null;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
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
