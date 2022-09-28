import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cellStatus } from '../models/cellStatus';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css']
})
export class BoardCellComponent implements OnInit {



  constructor() { }

  @Input() xCoord: string = "";
  @Input() yCoord: number = 0;
  @Input() cellStatus: cellStatus = "hidden";
  @Output() cellClicked: EventEmitter<cellClickedEvent> = new EventEmitter<cellClickedEvent>();

  ngOnInit(): void {
  }


  onClick(): void {
    this.cellClicked.emit({X: this.xCoord, Y: this.yCoord})
  }
}

export interface cellClickedEvent {
  X: string;
  Y: number;
}