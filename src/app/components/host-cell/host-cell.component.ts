import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cellLocationEvent } from 'src/app/models/cellLocationEvent';
import { cellStatus } from 'src/app/models/cellStatus';

@Component({
  selector: 'app-host-cell',
  templateUrl: './host-cell.component.html',
  styleUrls: ['./host-cell.component.css'],
})
export class HostCellComponent {
  constructor() {}

  @Input() xCoord: string = '';
  @Input() yCoord: number = 0;
  @Input() cellStatus: cellStatus = { status: 'empty' };
  @Output() shipDropped: EventEmitter<cellLocationEvent> =
    new EventEmitter<cellLocationEvent>();

  onDrop(): void {
    this.shipDropped.emit({ Col: this.xCoord, Row: this.yCoord });
  }
}
