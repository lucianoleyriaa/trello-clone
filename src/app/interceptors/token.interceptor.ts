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
import { AuthService } from '../services/auth.service';
import { switchMap } from 'rxjs/operators';

const AUTH_CONTEXT = new HttpContextToken<boolean>(() => false);

export const AuthContext = () => {
    return new HttpContext().set(AUTH_CONTEXT, true);
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.context.get(AUTH_CONTEXT)) {
        if (this.tokenService.isValidToken()) {
            return this.addToken(req, next);
        } else {
            return this.updateToken(req, next);
        }
    }
    return next.handle(req);
  }

    addToken(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.tokenService.getToken();

        const newRequest = req.clone(
            { headers: req.headers.set('Authorization', `Bearer ${token}`) }
        )

        return next.handle(newRequest);
    }

    updateToken(req: HttpRequest<any>, next: HttpHandler) {
        const refreshToken = this.tokenService.getRefreshToken();
        const refreshTokenValid = this.tokenService.isValidRefreshToken();

        if (refreshToken && refreshTokenValid) {
            return this.authService.refreshToken(refreshToken)
                .pipe(
                    switchMap(() => this.addToken(req, next))
                )
        }

        return next.handle(req);
    }
}
