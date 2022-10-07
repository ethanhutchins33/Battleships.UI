import { Injectable } from '@angular/core';
import { cellStatus } from 'src/app/models/cellStatus';
import { cellClickedEvent } from 'src/app/models/cellClickedEvent';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(
    private http: HttpClient,
  ) { }

  shotFired($event: cellClickedEvent): Observable<cellStatus>{
    console.log("Firing shot...");
    return this.http.get<cellStatus>(`${environment.BattleShipsGameApiUrl}/game`);
  }

}
