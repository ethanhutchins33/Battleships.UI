import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-host-cell',
  templateUrl: './host-cell.component.html',
  styleUrls: ['../base-styles/cell-base.css', './host-cell.component.css'],
})
export class HostCellComponent {
  constructor() {}

  @Input() status: string = 'test';
  @Output() shipDropped = new EventEmitter<any>();

  

  onDrop($event: CdkDragDrop<string[]>) {
    console.log($event);
    this.shipDropped.emit($event);
  }
}
