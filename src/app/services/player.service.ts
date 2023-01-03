import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayer(): Observable<Player> {
    console.log('Trying to get player...');
    return this.http.get<Player>(`${environment.BattleShipsApiUrl}/player/get`);
  }
}
