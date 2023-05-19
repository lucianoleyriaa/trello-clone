import { Injectable } from '@angular/core';
import { setCookie, getCookie, removeCookie } from 'typescript-cookie';
import jwd_decode, { JwtPayload } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    constructor() { }

    saveToken(token: string) {
        setCookie('token-trello', token);
    }

    getToken() {
        return getCookie('token-trello');
    }

    removeToken() {
        removeCookie('token-trello');
    }

    saveRefreshToken(refreshToken: string) {
        setCookie('refresh-token-trello', refreshToken);
    }

    getRefreshToken() {
        return getCookie('refresh-token-trello');
    }

    removeRefreshToken() {
        removeCookie('refresh-token-trello');
    }

    isValidToken(): boolean {
        const token = this.getToken();

        if (!token) {
            return false;
        }

        const tokenDecoded = jwd_decode<JwtPayload>(token);
        if (tokenDecoded && tokenDecoded.exp) {
            const today = new Date();
            let expiresIn = new Date(0);
            expiresIn.setUTCSeconds(tokenDecoded.exp);

            return expiresIn.getTime() > today.getTime();
        }

        return false;

    }

    isValidRefreshToken(): boolean {
        const token = this.getRefreshToken();

        if (!token) {
            return false;
        }

        const tokenDecoded = jwd_decode<JwtPayload>(token);
        if (tokenDecoded && tokenDecoded.exp) {
            const today = new Date();
            let expiresIn = new Date(0);
            expiresIn.setUTCSeconds(tokenDecoded.exp);

            return expiresIn.getTime() > today.getTime();
        }

        return false;

    }

}
