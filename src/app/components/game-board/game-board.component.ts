import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BoardCellComponent } from '../board-cell/board-cell.component';
import { gameRow } from '../../models/gameRow';
import { BoardService } from 'src/app/services/board.service';
import { cellClickedEvent } from 'src/app/models/cellClickedEvent';

const NUM_PLAYERS: number = 2;
const BOARD_SIZE: number = 7;

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

  constructor(private gameservice: BoardService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  fireTorpedo($event: cellClickedEvent) {
    console.log($event);
    const tempCell = this.cells.find(
      (cell) => cell.xCoord == $event.X && cell.yCoord == $event.Y
    );

    if (tempCell) {
      this.gameservice.shotFired($event).subscribe((result) => {
        tempCell.cellStatus = result;
      });
    }
  }
}
