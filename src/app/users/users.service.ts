import { IService } from './../interfaces/service.interface';
import { IUsers } from './../interfaces/users.interface';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService implements IService {

  url: string;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
    this.url = `${this.authService.API_URL}/users`;
  }

  list(): Observable<Object> {
    return this.http.get(this.url);
  }

  getById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  add(data: IUsers) {
    return this.http.post(this.url, data);
  }

  edit(id: number, data: IUsers) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}


