import { GameService } from 'src/app/services/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.gameService.joinGame(params.gameCode).subscribe();
    });
  }
}
