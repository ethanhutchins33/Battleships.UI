import { Injectable } from '@angular/core';
import { Board } from '../../models/board';
import { Player } from '../../models/player';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  
  constructor() { }
  
  board!: Board;

}
