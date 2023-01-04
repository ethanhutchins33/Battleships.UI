import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent implements OnInit {
  constructor(
    private readonly gameService: GameService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  createNewGame() {
    this.gameService
      .createGame()
      .subscribe((response) =>
        this.router.navigate([`/play/${response.gameCode}`])
      );
  }
}
