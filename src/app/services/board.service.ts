import { Injectable } from '@angular/core';
import { cellStatus } from 'src/app/models/cellStatus';
import { cellClickedEvent } from 'src/app/models/cellClickedEvent';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateGameResponseDto } from 'src/app/requests/CreateGameResponseDto';
import { Player } from 'src/app/models/player';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}

  createGame(player: Player): Observable<CreateGameResponseDto> {
    return this.http.post<CreateGameResponseDto>(
      `${environment.BattleShipsApiUrl}/game/create`,
      player.id
    );
  }

  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }

  shotFired($event: cellClickedEvent): Observable<cellStatus> {
    console.log('Joining Game');
    return this.http.get<cellStatus>(
      `${environment.BattleShipsApiUrl}/game/join`
    );
  }
}
