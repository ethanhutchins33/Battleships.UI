import { GameService } from 'src/app/services/game.service';
import { HostCellComponent } from '../host-cell/host-cell.component';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-host-board',
  templateUrl: './host-board.component.html',
  styleUrls: ['../base-styles/board-base.css', './host-board.component.css'],
})
export class HostBoardComponent {
  @ViewChildren(HostCellComponent) cells!: QueryList<HostCellComponent>;

  constructor(private gameService: GameService) {}

  board: string[][] = this.gameService.getNewBoard();

  addShip($event: CdkDragDrop<any[]>, i: number, j: number) {
    console.log(`Adding ship to board location: ${i}${j}`);
    console.log($event);
    this.board[i][j] = 'S';
    console.log(this.board);
  }
}
