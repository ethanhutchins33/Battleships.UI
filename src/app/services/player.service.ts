import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<Player> {
    console.log('Trying to get profile...');
    return this.http.get<Player>(`${environment.BattleShipsApiUrl}/player/get`);
  }

  addUserProfile(user: Player): Observable<Player> {
    console.log('Adding new user to the DB...');
    return this.http.post<Player>(
      `${environment.BattleShipsApiUrl}/player/add`,
      user
    );
  }
}
