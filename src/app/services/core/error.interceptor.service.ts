import {
    HttpContextToken,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
export const BYPASS_LOG = new HttpContextToken(() => false);

@Injectable({
    providedIn: 'root',
})
export class ErrorInterceptor  implements HttpInterceptor {
  constructor(private router: Router){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {

        switch (error?.status) {
          case 400:
            
            break;
          case 401:
            if(this.router.url !=='/login' ){
              this.router.navigate(["/login/401"]);
            }else {
              
              
            }

            break;
          case 404:
           
            break;
          case 403:
            
            break;
          case 500:
            break;
          default:
            break;
        }
        return throwError(error);
      })
    )
  }
}

