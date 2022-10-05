import { Injectable } from '@angular/core';
import { cellStatus } from 'src/app/models/cellStatus';
import { cellClickedEvent } from '../board-cell/board-cell.component';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  
  constructor() { }

  shotFired($event: cellClickedEvent): cellStatus{
    //http request to API

    return (Math.random() > 0.5) ? "hit" : "missed"
  }

}
