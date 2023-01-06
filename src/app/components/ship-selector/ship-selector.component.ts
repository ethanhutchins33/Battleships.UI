import { ShipComponent } from './../ship/ship.component';
import { Component, OnInit } from '@angular/core';
import { ship } from 'src/app/models/ship';

@Component({
  selector: 'app-ship-selector',
  templateUrl: './ship-selector.component.html',
  styleUrls: ['./ship-selector.component.css'],
})
export class ShipSelectorComponent implements OnInit {
  ships: ship[] = [
    { id: 1, size: 1, X: 0, Y: 0 },
    { id: 2, size: 1, X: 0, Y: 0 },
    { id: 3, size: 1, X: 0, Y: 0 },
    { id: 4, size: 1, X: 0, Y: 0 },
    { id: 5, size: 1, X: 0, Y: 0 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
