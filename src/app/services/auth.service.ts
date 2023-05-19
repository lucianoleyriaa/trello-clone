import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { environment } from '@environments/environment';
import { TokenService } from './token.service';
import { ResponseLogin } from '../models/auth.model';
import { User } from '../models/User.model';
import { AuthContext } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user$ = new BehaviorSubject<User | null>(null);
    apiURL = environment.API_URL;

    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
    ) { }

    login(email: string, password: string) {
        return this.http.post<ResponseLogin>(`${this.apiURL}/api/v1/auth/login`, { email, password })
            .pipe(
                tap(data => {
                    this.tokenService.saveToken(data.access_token);
                    this.tokenService.saveRefreshToken(data.refresh_token);
                })
            );
    }

    signup(name: string, email: string, password: string) {
        return this.http.post(`${this.apiURL}/api/v1/auth/register`, { name, email, password });
    }

    singnupAndLogin(name: string, email: string, password: string) {
        return this.http.post(`${this.apiURL}/api/v1/auth/register`, { name, email, password })
            .pipe(
                switchMap(() => this.login(email, password))
            );
    }

    isAvailable(email: string) {
        return this.http.post<{isAvailable: boolean}>(`${this.apiURL}/api/v1/auth/is-available`, { email });
    }

    recoveryPassword(email: string) {
        return this.http.post(`${this.apiURL}/api/v1/auth/recovery`, { email });
    }

    changePassword(token: string, newPassword: string) {
        return this.http.post(`${this.apiURL}/api/v1/auth/change-password`, { token, newPassword });
    }

    refreshToken(refreshToken: string) {
        return this.http.post<ResponseLogin>(`${this.apiURL}/api/v1/auth/refresh-token`, { refreshToken })
            .pipe(
                tap((response) => {
                    this.tokenService.saveToken(response.access_token);
                    this.tokenService.saveRefreshToken(response.refresh_token);
                })
            )
    }

    logout() {
        this.tokenService.removeToken();
        this.tokenService.removeRefreshToken();
    }

    getProfile() {
        return this.http.get<User>(`${this.apiURL}/api/v1/auth/profile`, { context: AuthContext() })
            .pipe(
                tap(user => {
                    return this.user$.next(user);
                })
            );
    }
}
