import { GameService } from 'src/app/services/game.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { cellLocationEvent } from './../../models/cellLocationEvent';
import { HostCellComponent } from '../host-cell/host-cell.component';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { gameRow } from 'src/app/models/gameRow';

@Component({
  selector: 'app-host-board',
  templateUrl: './host-board.component.html',
  styleUrls: ['./host-board.component.css'],
})
export class HostBoardComponent {
  @ViewChildren(HostCellComponent) cells!: QueryList<HostCellComponent>;

  constructor(private gameService: GameService) {}

  board: Array<gameRow> = [
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 1 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 2 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 3 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 4 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 5 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 6 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 7 },
  ];

  onDrop($event: CdkDragDrop<cellLocationEvent>): void {
    const tempCell = this.cells.find(
      (cell) =>
        cell.xCoord == $event.container.data.Col &&
        cell.yCoord == $event.container.data.Row
    );

    if (tempCell) {
      tempCell.cellStatus.status = 'ship';
    }
  }
}
