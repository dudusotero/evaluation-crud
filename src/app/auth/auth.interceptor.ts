import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHeaderResponse, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  trataResponse(event) {
    if (event.status === 200) {
      this.authService.setToken(event.body.access_token);
    } else if (event.status === 401) {
      this.authService.logout();
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + this.authService.token || ''
      }
    });

    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.trataResponse(event);
      }
    }).catch((err, caught) => {
      this.trataResponse(err);
      return Observable.throw(err);
    });
  }

}
