import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  
  constructor() { }
  
  board!: Board;

  public tiles2: number[] = [1, 2, 3, 4, 5, 6, 7];

  createBoard(BOARD_SIZE: number = 7) : BoardService {
    // create tiles for board
    let tiles1!: string[];
    for(let i=0; i < BOARD_SIZE; i++) {
      for(let j=0; j < BOARD_SIZE; j++) {
        tiles1[i] = 'X';
      }
    }

    

    // generate random ships for the board
    // for (let i = 0; i < BOARD_SIZE * 2; i++) {
    //   tiles = this.randomShips(tiles, size);
    // }



    // new player
    //let player1: Player = ({ id: 1, score: 0 });
    
    // create board
    this.board = ({tiles : tiles1});

    return this;
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getBoard(): Board {
    return this.board;
  }

}
