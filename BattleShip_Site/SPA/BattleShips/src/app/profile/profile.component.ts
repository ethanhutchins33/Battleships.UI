import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile.model';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: Profile;

  constructor(
    private http: HttpClient,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  // getProfile() {
  //   this.http.get(GRAPH_ENDPOINT)
  //   .subscribe(profile => {
  //     this.profile = profile;
  //   });
  // }

  getProfile(): void {
    this.profileService.profile("59ce6cae-e144-46bb-aa72-1dfd67490f92").subscribe(profile => {
      this.profile = profile;
    })
  }
  
}
