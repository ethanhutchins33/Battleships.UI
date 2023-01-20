import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cellStatus } from '../../models/cellStatus';
import { cellLocationEvent } from 'src/app/models/cellLocationEvent';

@Component({
  selector: 'app-opponent-cell',
  templateUrl: './opponent-cell.component.html',
  styleUrls: ['../base-styles/cell-base.css', './opponent-cell.component.css'],
})
export class BoardCellComponent {
  constructor() {}

  @Input() xCoord: number = 0;
  @Input() yCoord: number = 0;
  @Input() hostTurn: boolean = false;
  @Output() cellClicked = new EventEmitter<cellLocationEvent>();
  cellStatus: cellStatus = { status: '' };
  onClick(): void {
    if (this.hostTurn) {
      this.cellClicked.emit({ X: this.xCoord, Y: this.yCoord });
    }
  }
}
