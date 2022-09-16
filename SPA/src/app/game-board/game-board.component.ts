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

  


  constructor(
    private boardService: BoardService,
    ) {
      
     }

  ngOnInit(): void {
    let canPlay: boolean = true;
    let player: number = 0;
    let players: number = 0;
    let gameId: string = "";
    //let gameUrl: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '');
  }

  createBoard(){
    this.boardService.createBoards(BOARD_SIZE);
    return this;
  }

  getBoards(): Board[] {
    return this.boardService.getBoards();
  }

}
