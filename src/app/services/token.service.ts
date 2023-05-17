import { Injectable } from '@angular/core';
import { setCookie, getCookie, removeCookie } from 'typescript-cookie';

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

}
