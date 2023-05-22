import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { Board } from '../models/Board.model';
import { AuthContext } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class MeService {

    private apiURL = environment.API_URL;

    constructor(
        private http: HttpClient,
    ) { }

    getMeBoards() {
        return this.http.get<Board[]>(`${this.apiURL}/api/v1/me/boards`,{
            context: AuthContext(),
        });
    }
}
