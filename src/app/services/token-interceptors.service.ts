import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AutorizadorService } from './autorizador.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorsService {

  private AUTH_HEADER = 'Authorization';

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // obter os serviços que precisam
    const autorizadorService = this.injector.get(AutorizadorService);

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const token = event.headers.get(this.AUTH_HEADER);
          if (token) {
            autorizadorService.token = token;
          }
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        let text = '';
        let code;
        switch (err.status) {
          case HttpStatusCode.BadRequest:
            text = err.error.message ? err.error.message : err.error.error;
            break;
          case HttpStatusCode.Unauthorized:
            text = err.error.message;
            break;
          case HttpStatusCode.NotFound:
            text = err.error.message;
            break;
          default:
            text = 'Ops! Ocorreu um erro interno não experado.';
        }
        return throwError(() => new Error(text));
      })
    );
  }

}
