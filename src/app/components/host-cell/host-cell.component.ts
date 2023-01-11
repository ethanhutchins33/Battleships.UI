import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ship } from 'src/app/models/ship';

@Component({
  selector: 'app-host-cell',
  templateUrl: './host-cell.component.html',
  styleUrls: ['../base-styles/cell-base.css', './host-cell.component.css'],
})
export class HostCellComponent {
  constructor() {}

  @Input() status: string = 'test';
  @Output() shipDropped = new EventEmitter<any>();

  ships: ship[] = [];

  onDrop(event: CdkDragDrop<ship[]>) {
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
    console.log(event);
    this.shipDropped.emit(event);
  }
}
