import { Injectable } from '@angular/core';
import { cellStatus } from 'src/app/models/cellStatus';
import { cellClickedEvent } from 'src/app/models/cellClickedEvent';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateGameResponseDto } from 'src/app/responses/CreateGameResponseDto';
import { JoinGameResponseDto } from '../responses/JoinGameResponseDto';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  createGame(): Observable<CreateGameResponseDto> {
    return this.http.post<CreateGameResponseDto>(
      `${environment.BattleShipsApiUrl}/game/create`,
      null
    );
  }

  joinGame(gameCode: string): Observable<JoinGameResponseDto> {
    return this.http.post<JoinGameResponseDto>(
      `${environment.BattleShipsApiUrl}/game/join/${gameCode}`,
      null
    );
  }

  fireShot($event: cellClickedEvent): Observable<cellStatus> {
    console.log('Joining Game');
    return this.http.get<cellStatus>(
      `${environment.BattleShipsApiUrl}/game/fire`
    );
  }
}
