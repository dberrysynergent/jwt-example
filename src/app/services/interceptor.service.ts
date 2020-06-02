import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(user != null) {
      let headers = req.headers;
      headers = headers.append('Authorization', user.token);
      const authReq = req.clone({headers: headers});
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
