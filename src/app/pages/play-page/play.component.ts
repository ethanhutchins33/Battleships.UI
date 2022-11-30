import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  createNewGame() {
    //_gameService.createGame();
  }

  public gameStarted: boolean;

  constructor() {
    this.gameStarted = false; 
  }

  ngOnInit(): void {
    
  }

}
