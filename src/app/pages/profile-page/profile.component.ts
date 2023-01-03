import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from '../../services/player.service';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  player!: Player;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {

    this.playerService.getPlayer().subscribe((player) => {
      this.player = player;
    });
    
  }
  
}
