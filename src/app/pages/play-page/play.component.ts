import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  public gameStarted: boolean;
  private _boardService: BoardService;
  private _profileService: ProfileService;

  constructor(boardService: BoardService, profileService: ProfileService) {
    this.gameStarted = false;
    this._boardService = boardService;
    this._profileService = profileService;
  }

  ngOnInit(): void {}

  createNewGame() {
    //this._boardService.createGame(this._profileService.getUserProfile());
  }
}
