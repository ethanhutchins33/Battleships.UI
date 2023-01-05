import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cellStatus } from '../../models/cellStatus';
import { cellLocationEvent } from 'src/app/models/cellLocationEvent';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css'],
})
export class BoardCellComponent implements OnInit {
  constructor() {}

  @Input() xCoord: string = '';
  @Input() yCoord: number = 0;
  @Input() cellStatus: cellStatus = new cellStatus();
  @Output() cellClicked: EventEmitter<cellLocationEvent> =
    new EventEmitter<cellLocationEvent>();

  ngOnInit(): void {}

  onClick(): void {
    this.cellClicked.emit({ Col: this.xCoord, Row: this.yCoord });
  }
}
