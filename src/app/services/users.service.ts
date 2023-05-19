import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { User } from '../models/User.model';
import { AuthContext } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    apiURL = environment.API_URL;

    constructor(
        private http: HttpClient,
    ) { }

    getUsers() {
        return this.http.get<User[]>(`${this.apiURL}/api/v1/users/`, { context: AuthContext() } );
    }
}
