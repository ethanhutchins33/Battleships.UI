import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayer(): Observable<Profile> {
    console.log('Trying to get player...');
    return this.http.get<Profile>(
      `${environment.BattleShipsApiUrl}/player/get`
    );
  }
}
