import { Component, OnInit } from '@angular/core';
import { ship } from 'src/app/models/ship';

@Component({
  selector: 'app-ship-selector',
  templateUrl: './ship-selector.component.html',
  styleUrls: ['./ship-selector.component.css'],
})
export class ShipSelectorComponent implements OnInit {
  ships: ship[] = [{ size: 1 }, { size: 1 }, { size: 1 }];

  constructor() {}

  ngOnInit(): void {}
}
