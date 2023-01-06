import { Component, QueryList, ViewChildren } from '@angular/core';
import { BoardCellComponent } from '../opponent-cell/opponent-cell.component';
import { gameRow } from '../../models/gameRow';
import { GameService as GameService } from 'src/app/services/game.service';
import { cellLocationEvent } from 'src/app/models/cellLocationEvent';

@Component({
  selector: 'app-opponent-board',
  templateUrl: './opponent-board.component.html',
  styleUrls: [
    '../base-styles/board-base.css',
    './opponent-board.component.css',
  ],
})
export class GameBoardComponent {
  @ViewChildren(BoardCellComponent) cells!: QueryList<BoardCellComponent>;

  constructor(private gameservice: GameService) {}

  board: Array<gameRow> = [
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 1 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 2 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 3 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 4 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 5 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 6 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 7 },
  ];

  fireTorpedo($event: cellLocationEvent) {
    console.log($event);
    const tempCell = this.cells.find(
      (cell) => cell.xCoord == $event.Col && cell.yCoord == $event.Row
    );

    if (tempCell) {
      this.gameservice.fireShot($event).subscribe((result) => {
        tempCell.cellStatus.status = result.ShotResult;
      });
    }
  }
}
