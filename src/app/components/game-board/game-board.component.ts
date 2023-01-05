import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BoardCellComponent } from '../board-cell/board-cell.component';
import { gameRow } from '../../models/gameRow';
import { GameService as GameService } from 'src/app/services/game.service';
import { cellLocationEvent } from 'src/app/models/cellLocationEvent';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit, AfterViewInit {
  @ViewChildren(BoardCellComponent) cells!: QueryList<BoardCellComponent>;

  board: Array<gameRow> = [
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 1 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 2 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 3 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 4 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 5 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 6 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 7 },
  ];

  constructor(private gameservice: GameService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

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
