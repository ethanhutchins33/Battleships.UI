import { shot } from './../../models/shot';
import { GameService } from 'src/app/services/game.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendShipsRequestDto } from 'src/app/requests/SendShipsRequestDto';
import { Player } from 'src/app/models/player';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit, OnDestroy {
  host!: Player;
  opponent!: Player;
  gameId!: number;
  gameCode!: string;
  gameStarted: boolean = false;
  hostTurn: boolean = true;
  lastShot!: shot;
  gameOver: boolean = false;

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
      this.gameCode = params.gameCode;
    });

    this.gameService.joinGame(this.gameCode).subscribe((result) => {
      this.gameId = result.gameId;
      this.host.id = result.playerId;
      this.host.name = result.playerName;
      this.host.boardId = result.boardId;
    });

    if (!this.gameStarted && !this.gameOver) {
      this.pollLobbyReadyStatus();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  pollLastShot() {
    this.subscription = new Subscription();

    this.intervalId = setInterval(() => {
      this.subscription.add(
        this.gameService.getLastShot(this.gameId).subscribe((result) => {
          if (this.lastShot != result.lastShot) {
            this.lastShot = result.lastShot;
            console.log('Last shot arrived!');
            console.log(this.lastShot);

            if (this.lastShot.boardId == this.host.boardId) {
              this.host.board[result.lastShot.x][result.lastShot.y] =
                result.lastShot.shotStatus;
              this.hostTurn = true;
              console.log(this.hostTurn);
            }
          }
        })
      );
    }, 2000);
  }

  pollLobbyReadyStatus() {
    this.subscription = new Subscription();

    this.intervalId = setInterval(() => {
      this.subscription.add(
        this.gameService
          .getLobbyReadyStatus(this.gameId)
          .subscribe((result) => {
            if (result.lobbyStatus) {
              clearInterval(this.intervalId);
              this.subscription.unsubscribe();
              this.gameStarted = true;
              this.getFullLobbyDetails();
              this.pollLastShot();
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
        gameCode: this.gameCode,
      };

      this.gameService.sendShips(dto).subscribe((result) => {
        if (this.gameCode == result.gameCode) {
          console.log('Ships added successfully!');
          this.host.ready = true;
        }
      });
    }
  }

  setGameStartedDateTime() {
    this.gameService.setGameStartedDate(this.gameId);
  }

  getWhichPlayersTurn() {}

  // runGame() {
  //   do {
  //     if (!this.gameOver) {
  //       this.pollLastShot();
  //     } else {
  //       //this.getWinner();
  //     }
  //   } while (this.gameStarted);
  // }
}
