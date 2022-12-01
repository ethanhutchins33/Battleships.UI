import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { Profile } from '../../models/profile.model';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;

  constructor(
    private http: HttpClient,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.addProfile();
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getUserProfile(this.profile).subscribe((profile) => {
      this.profile = profile;
    });
  }

  addProfile(): void {
    this.profileService.addUserProfile(this.profile).subscribe((profile) => {
      this.profile = profile;
    });
  }
}
