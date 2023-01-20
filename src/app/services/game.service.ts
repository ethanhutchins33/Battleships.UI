import { PollLobbyResponseDto } from './../responses/PollLobbyResponseDto';
import { ShotFiredDto } from './../requests/ShotFiredRequestDto';
import { Injectable } from '@angular/core';
import { FireShotResponseDto } from '../responses/FireShotResponseDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateGameResponseDto } from 'src/app/responses/CreateGameResponseDto';
import { FullLobbyDetailsDto } from '../responses/FullLobbyDetailsDto';
import { JoinGameResponseDto } from '../responses/JoinGameResponseDto';
import { SendShipsRequestDto } from '../requests/SendShipsRequestDto';
import { AddShipsResponseDto } from '../responses/AddShipsResponseDto';
import { GetLastShotResponseDto } from '../responses/GetLastShotResponseDto';
import { StartResponseDto } from '../responses/StartResponseDto';

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

  setGameStartedDate(gameId: number): Observable<StartResponseDto> {
    console.log(`Setting game started with Id: ${gameId}...`);

    return this.http.post<StartResponseDto>(
      `${environment.BattleShipsApiUrl}/game/start/${gameId}`,
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
    sendShipsRequestDto: SendShipsRequestDto
  ): Observable<AddShipsResponseDto> {
    console.log('Sending Ships to API...');
    return this.http.post<AddShipsResponseDto>(
      `${environment.BattleShipsApiUrl}/game/addships`,
      sendShipsRequestDto
    );
  }

  getFullLobbyDetails(
    gameId: number,
    hostId: number
  ): Observable<FullLobbyDetailsDto> {
    return this.http.get<FullLobbyDetailsDto>(
      `${environment.BattleShipsApiUrl}/game/state/${gameId}/${hostId}`
    );
  }

  getLobbyReadyStatus(gameId: number): Observable<PollLobbyResponseDto> {
    return new Observable((observer) => {
      this.http
        .get<PollLobbyResponseDto>(
          `${environment.BattleShipsApiUrl}/game/ready/${gameId}`
        )
        .subscribe((response) => {
          observer.next(response);
        });
    });
  }

  getLastShot(gameId: number): Observable<GetLastShotResponseDto> {
    return this.http.get<GetLastShotResponseDto>(
      `${environment.BattleShipsApiUrl}/game/last/${gameId}`
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
