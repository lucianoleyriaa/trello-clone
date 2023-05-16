import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    apiURL = environment.API_URL;

    constructor(
        private http: HttpClient,
    ) { }

    login(email: string, password: string) {
        return this.http.post(`${this.apiURL}/api/v1/auth/login`, { email, password });
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

    changePassword(token: string, password: string) {
        return this.http.post(`${this.apiURL}/api/v1/auth/change-password`, { token, password });
    }
}
