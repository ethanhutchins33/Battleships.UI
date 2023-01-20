import { ActivatedRoute } from '@angular/router';
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { BoardCellComponent } from '../opponent-cell/opponent-cell.component';
import { GameService as GameService } from 'src/app/services/game.service';
import { cellLocationEvent } from 'src/app/models/cellLocationEvent';
import { ShotFiredDto } from 'src/app/requests/ShotFiredRequestDto';

@Component({
  selector: 'app-opponent-board',
  templateUrl: './opponent-board.component.html',
  styleUrls: [
    '../base-styles/board-base.css',
    './opponent-board.component.css',
  ],
})
export class GameBoardComponent {
  @Input() boardId!: number;
  @Input() board!: string[][];
  @Input() hostTurn: boolean = false;
  @ViewChildren(BoardCellComponent) cells!: QueryList<BoardCellComponent>;

  constructor(private gameService: GameService) {}

  fireTorpedo($event: cellLocationEvent) {
    console.log($event);
    const tempCell = this.cells.find(
      (cell) => cell.xCoord == $event.X && cell.yCoord == $event.Y
    );

    if (tempCell) {
      let shot: ShotFiredDto = {
        BoardId: this.boardId,
        X: $event.X,
        Y: $event.Y,
      };

      this.gameService.fireShot(shot).subscribe((result) => {
        tempCell.cellStatus.status = result.shotResult;
      });

      //this.hostTurn = false;
    }
  }
}
