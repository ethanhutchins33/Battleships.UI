import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['../base-styles/cell-base.css', './ship.component.css'],
})
export class ShipComponent {
  @Input() id: number = 0;
  @Input() shipSize: number = 1;
  @Input() X!: number;
  @Input() Y!: number;
}
