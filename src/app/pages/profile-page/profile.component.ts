import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { PlayerService } from '../../services/player.service';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getPlayer().subscribe((profile) => {
      this.profile = profile;
    });
  }
}
