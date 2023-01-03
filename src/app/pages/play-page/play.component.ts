import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/player.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  public gameStarted: boolean;
  private _gameService: GameService;
  private _profileService: ProfileService;

  constructor(GameService: GameService, profileService: ProfileService) {
    this.gameStarted = false;
    this._gameService = GameService;
    this._profileService = profileService;
  }

  ngOnInit(): void {}

  createNewGame() {
    //this._gameService.createGame(this._profileService.getUserProfile());
  }
}
