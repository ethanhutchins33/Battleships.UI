import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { ProfileService } from '../services/profile.service';
import { ProfileType } from '../models/profile.model';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: ProfileType;

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
    this.profileService.profile(1).subscribe(profile => {
      this.profile = profile;
    })
  }



}
