import { ShotFiredDto } from './../requests/ShotFiredRequestDto';
import { Injectable } from '@angular/core';
import { FireShotResponseDto } from '../responses/FireShotResponseDto';
import { cellLocationEvent } from 'src/app/models/cellLocationEvent';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateGameResponseDto } from 'src/app/responses/CreateGameResponseDto';
import { JoinGameResponseDto } from '../responses/JoinGameResponseDto';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute
  ) {}

  createGame(): Observable<CreateGameResponseDto> {
    console.log('Creating a new game...');
    return this.http.post<CreateGameResponseDto>(
      `${environment.BattleShipsApiUrl}/game/create`,
      null
    );
  }

  joinGame(gameCode: string): Observable<JoinGameResponseDto> {
    console.log(`Joining Game: ${gameCode}...`);
    return this.http.post<JoinGameResponseDto>(
      `${environment.BattleShipsApiUrl}/game/join/${gameCode}`,
      null
    );
  }

  fireShot(cellShotAt: cellLocationEvent): Observable<FireShotResponseDto> {
    console.log('Firing Shot...');
    let gameCode = this.route.snapshot.paramMap.get('gameCode');
    console.log(gameCode);

    let shotFired: ShotFiredDto = {
      GameCode: 'gameCode',
      BoardId: 1,
      ColChar: cellShotAt.Col,
      RowNumber: cellShotAt.Row,
    };

    return this.http.post<FireShotResponseDto>(
      `${environment.BattleShipsApiUrl}/game/fire`,
      shotFired
    );
  }
}
