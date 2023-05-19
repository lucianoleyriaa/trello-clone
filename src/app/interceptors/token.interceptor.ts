import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

const AUTH_CONTEXT = new HttpContextToken<boolean>(() => false);

export const AuthContext = () => {
    return new HttpContext().set(AUTH_CONTEXT, true);
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.context.get(AUTH_CONTEXT)) {
        const token = this.tokenService.getToken();
        const newRequest = req.clone(
            { headers: req.headers.set('Authorization', `Bearer ${token}`) }
        )

        return next.handle(newRequest);
    }

    return next.handle(req);
  }
}
