import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AuthContext } from '../interceptors/token.interceptor';
import { Board } from '../models/Board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

    apiURL = environment.API_URL;

    constructor(
        private http: HttpClient
    ) { }

    getBoard(id: Board['id']) {
        return this.http.get<Board>(`${this.apiURL}/api/v1/boards/${id}`, { context: AuthContext() });
    }

}
