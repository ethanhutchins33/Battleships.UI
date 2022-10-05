import { Injectable } from '@angular/core';
import { cellStatus } from 'src/app/models/cellStatus';
import { cellClickedEvent } from 'src/app/models/cellClickedEvent';

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
