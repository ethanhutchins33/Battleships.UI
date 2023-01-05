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

  constructor() {}

  board: Array<gameRow> = [
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 1 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 2 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 3 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 4 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 5 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 6 },
    { cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rowNumber: 7 },
  ];
}
