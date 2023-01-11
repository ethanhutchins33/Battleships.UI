import { Component, OnInit } from '@angular/core';
import { ship } from 'src/app/models/ship';

@Component({
  selector: 'app-ship-selector',
  templateUrl: './ship-selector.component.html',
  styleUrls: ['./ship-selector.component.css'],
})
export class ShipSelectorComponent implements OnInit {
  ships: ship[] = [
    { id: 1, size: 1, isVertical: false },
    { id: 2, size: 1, isVertical: false },
    { id: 3, size: 1, isVertical: false },
    { id: 4, size: 1, isVertical: false },
    { id: 5, size: 1, isVertical: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
