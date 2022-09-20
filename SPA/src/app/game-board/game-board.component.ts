import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { Board } from '../models/board';

const NUM_PLAYERS: number = 2;
const BOARD_SIZE: number = 7;

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {
  board: Array<any> = [];

  constructor(
    private boardService: BoardService,
    ) {
        for(let i = 0; i < 7; i++){
          this.board.push({ A: '[ ]', B: '[ ]', C: '[ ]', D: '[ ]', E: '[ ]', F: '[ ]', G: '[ ]' });
        }
        
     }

  ngOnInit(): void {}
}
