import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { ProfileService } from '../../services/player.service';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  player!: Player;

  constructor(private playerService: ProfileService) {}

  ngOnInit() {
    // this.addProfile();
    this.getPlayer();
  }

  getPlayer(): void {
    this.playerService.getUserProfile().subscribe((player) => {
      this.player = player;
    });
  }

  addPlayer(): void {
    this.playerService.addUserProfile(this.player).subscribe((player) => {
      this.player = player;
    });
  }
}
