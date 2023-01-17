import { GameService } from 'src/app/services/game.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-host-board',
  templateUrl: './host-board.component.html',
  styleUrls: ['../base-styles/board-base.css', './host-board.component.css'],
})
export class HostBoardComponent {
  @Input() board!: string[][];
  @Output() boardChange = new EventEmitter<string[][]>();

  constructor() {}

  addShip($event: CdkDragDrop<any[]>, i: number, j: number) {
    console.log(`Adding ship to board location: ${i}${j}`);
    console.log($event);
    this.board[i][j] = 'S';
    console.log(this.board);
    this.boardChange.emit(this.board);
  }
}
