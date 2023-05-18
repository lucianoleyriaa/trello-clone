import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    apiURL = environment.API_URL;

    constructor(
        private http: HttpClient,
    ) { }

    getUsers() {
        return this.http.get(`${this.apiURL}/api/v1/users/`);
    }
}
