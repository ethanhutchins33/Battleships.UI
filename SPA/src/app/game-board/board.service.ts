import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  
  createBoards(BOARD_SIZE: number) {

    throw new Error('Method not implemented.');
  }

  getBoards(): Board[] {
    
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
