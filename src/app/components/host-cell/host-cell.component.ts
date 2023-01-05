import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cellLocationEvent } from 'src/app/models/cellLocationEvent';
import { cellStatus } from 'src/app/models/cellStatus';
import { ship } from 'src/app/models/ship';

@Component({
  selector: 'app-host-cell',
  templateUrl: './host-cell.component.html',
  styleUrls: ['./host-cell.component.css'],
})
export class HostCellComponent {
  constructor() {}

  @Input() xCoord: string = '';
  @Input() yCoord: number = 0;
  @Input() cellStatus: cellStatus = { status: '' };
  @Output() shipDropped: EventEmitter<cellLocationEvent> =
    new EventEmitter<cellLocationEvent>();

  ship: ship[] = [];

  drop(event: CdkDragDrop<ship[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
