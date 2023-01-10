import { ShotFiredDto } from './../requests/ShotFiredRequestDto';
import { Injectable } from '@angular/core';
import { FireShotResponseDto } from '../responses/FireShotResponseDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateGameResponseDto } from 'src/app/responses/CreateGameResponseDto';
import { JoinGameResponseDto } from '../responses/JoinGameResponseDto';
import { SendShipsRequestDto } from '../requests/SendShipsRequestDto';
import { AddShipsResponseDto } from '../responses/AddShipsResponseDto';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private readonly http: HttpClient) {}

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

  fireShot(shotFiredDto: ShotFiredDto): Observable<FireShotResponseDto> {
    console.log('Firing Shot...');

    return this.http.post<FireShotResponseDto>(
      `${environment.BattleShipsApiUrl}/game/fire`,
      shotFiredDto
    );
  }

  sendShips(
    sendShipsDto: SendShipsRequestDto
  ): Observable<AddShipsResponseDto> {
    console.log('hitting sendships API');
    return this.http.post<AddShipsResponseDto>(
      `${environment.BattleShipsApiUrl}/game/addships`,
      sendShipsDto
    );
  }

  getNewBoard(): string[][] {
    return [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
    ];
  }
}
