import {
    HttpContextToken,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const BYPASS_LOG = new HttpContextToken(() => false);

@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
            const token = 'Basic ' + localStorage.getItem('token');
            const username = localStorage.getItem('username');  
            const modifiedReq = req.clone({
                headers: req.headers.set('authorization', token).set('username',username)});
            return next.handle(modifiedReq);
          }
        }