import { PollLobbyResponseDto } from './../../responses/PollLobbyResponseDto';
import { GameService } from 'src/app/services/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendShipsRequestDto } from 'src/app/requests/SendShipsRequestDto';
import { Player } from 'src/app/models/player';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  host!: Player;
  opponent!: Player;
  gameId!: number;
  GameCode!: string;
  GameStarted: boolean = false;

  subscription!: Subscription;
  private intervalId: NodeJS.Timeout | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService
  ) {}

  ngOnInit(): void {
    this.host = {
      id: 0,
      name: '',
      boardId: 0,
      ready: false,
      board: this.gameService.getNewBoard(),
    };
    this.opponent = {
      id: 0,
      name: '',
      boardId: 0,
      ready: false,
      board: this.gameService.getNewBoard(),
    };

    this.route.params.subscribe((params: any) => {
      this.GameCode = params.gameCode;
      this.gameService.joinGame(params.gameCode).subscribe((result) => {
        this.gameId = result.gameId;
        this.host.id = result.playerId;
        this.host.name = result.playerName;
        this.host.boardId = result.boardId;
      });
    });

    this.poll();
  }

  poll() {
    this.subscription = new Subscription();

    this.intervalId = setInterval(() => {
      this.subscription.add(
        this.gameService
          .getLobbyReadyStatus(this.gameId, this.host.id)
          .subscribe((result) => {
            if (result.lobbyStatus) {
              this.getFullLobbyDetails();
              this.GameStarted = true;
              clearInterval(this.intervalId);
              this.subscription.unsubscribe();
            }
          })
      );
    }, 3000);
  }

  getFullLobbyDetails() {
    this.gameService
      .getFullLobbyDetails(this.gameId, this.host.id)
      .subscribe((result) => {
        (this.host.id = result.hostId),
          (this.host.name = result.hostName),
          (this.host.boardId = result.hostBoardId),
          (this.host.ready = result.hostReadyStatus),
          (this.host.board = result.hostBoard),
          (this.opponent.id = result.opponentId),
          (this.opponent.name = result.opponentName),
          (this.opponent.boardId = result.opponentBoardId),
          (this.opponent.ready = result.opponentReadyStatus);
      });
  }

  btnReadyClicked() {
    //check board for at least one ship
    if (this.host.board.toString() == '') {
      console.log(`No ships were placed in the board: ${this.host.board}`);
    } else {
      console.log('Ready confirmed! Sending Ships...');

      let dto: SendShipsRequestDto = {
        board: this.host.board,
        playerId: this.host.id,
        gameCode: this.GameCode,
      };

      this.gameService.sendShips(dto).subscribe((result) => {
        if (this.GameCode == result.gameCode) {
          console.log('Ships added successfully!');
          this.host.ready = true;
        }
      });
    }
  }

  startGame() {
    if (this.host.ready && this.opponent.ready) {
      this.GameStarted = true;
    }
  }
}
