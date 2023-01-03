import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  public gameStarted: boolean;
  private _gameService: GameService;
  private _playerService: PlayerService;

  constructor(GameService: GameService, playerService: PlayerService) {
    this.gameStarted = false;
    this._gameService = GameService;
    this._playerService = playerService;
  }

  ngOnInit(): void {}

  createNewGame() {
    //this._gameService.createGame(this._playerService.getUserPlayer());
  }
}
