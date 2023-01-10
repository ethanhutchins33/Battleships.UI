import { SendShipsRequestDto } from './../../requests/SendShipsRequestDto';
import { GameService } from 'src/app/services/game.service';
import { HostCellComponent } from '../host-cell/host-cell.component';
import { Component, QueryList, ViewChildren, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-host-board',
  templateUrl: './host-board.component.html',
  styleUrls: ['../base-styles/board-base.css', './host-board.component.css'],
})
export class HostBoardComponent {
  @Input() boardId: number = 0;
  @Input() playerId: number = 0;
  @Input() gameCode: string = '';
  @ViewChildren(HostCellComponent) cells!: QueryList<HostCellComponent>;

  constructor(private gameService: GameService) {}

  board: string[][] = this.gameService.getNewBoard();

  addShip($event: CdkDragDrop<any[]>, i: number, j: number) {
    console.log(`Adding ship to board location: ${i}${j}`);
    console.log($event);
    this.board[i][j] = 'S';
    console.log(this.board);
  }

  btnReadyClicked() {
    //check board for at least one ship
    if (this.board.toString() == '') {
      console.log(`No ships were placed in the board: ${this.board}`);
    }

    console.log('Ready confirmed! Sending Ships');
    let dto: SendShipsRequestDto = {
      board: this.board,
      playerId: this.playerId,
      gameCode: this.gameCode,
    };

    this.gameService.sendShips(dto).subscribe((result) => {
      if (this.gameCode == result.gameCode) {
        console.log('Ships added successfully!');
      }
    });
  }
}
