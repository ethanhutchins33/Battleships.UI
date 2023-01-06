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
  @Input() cellStatus: cellStatus = { status: 'hidden' };
  @Output() cellClicked = new EventEmitter<cellLocationEvent>();

  onClick(): void {
    this.cellClicked.emit({ X: this.xCoord, Y: this.yCoord });
  }
}
