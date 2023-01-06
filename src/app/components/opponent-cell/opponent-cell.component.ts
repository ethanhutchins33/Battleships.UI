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

  @Input() xCoord: string = '';
  @Input() yCoord: number = 0;
  @Input() cellStatus: cellStatus = { status: 'hidden' };
  @Output() cellClicked: EventEmitter<cellLocationEvent> =
    new EventEmitter<cellLocationEvent>();

  onClick(): void {
    this.cellClicked.emit({ Col: this.xCoord, Row: this.yCoord });
  }
}
