import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { TokenService } from './token.service';
import { ResponseLogin } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

    logout() {
        this.tokenService.removeToken();
    }
}
